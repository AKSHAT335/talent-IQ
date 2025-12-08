import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";
export async function createSession(req, res) {
    try {
        const [problem, difficulty] = req.body;
        const userId = req.user._id;
        const clerkId = req.user.clerkId;

        if (!problem || !difficulty) {
            return res.status(400).json({ message: "Problem and difficulty are required" });
        }

        const callId = `call_${Date.now()}_${Math.random().toString(36).substring(7)}`;

        const session= new Session({
            problem,
            difficulty,
            host: userId,
            callId
        });
        
        await streamClient.video.call("default", callId).getOrCreate({
            data: { 
                created_by_id: clerkId,
                custom:{
                    problem,difficulty,sessionId:session._id.toString()
                },
            },
        });

        const channel = chatClient.channel("messaging", callId, {
            name:`${problem} Session`,
            created_by_id: clerkId,
            members: [clerkId],
        });

        await channel.create();
        res.status(201).json({ message: "Session created successfully", session });
    } catch (error) {
        console.error("Error creating session:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getActiveSessions(_, res) {
    try {
        const sessions=await Session.find({status:"active"}).populate('host','name profileImage email clerkId').sort({createdAt:-1}).limit(20);
        res.status(200).json({ sessions });
    } catch (error) {
        console.error("Error fetching active sessions:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getMyRecentSessions(req, res) {
    try {
        const userId=req.user._id;
        const sessions=await Session.find({
            status:"completed",
            $or:[{host:userId},{participant:userId}]}).sort({createdAt:-1}).limit(20);
        res.status(200).json({ sessions });
    }
    catch (error) {
        console.error("Error fetching recent sessions:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getSessionById(req, res) {
    try {
        const {id}=req.params;
        const session=await Session.findById(id).populate('host','name profileImage email clerkId').populate('participant','name profileImage email clerkId');
        if(!session) {
            return res.status(404).json({ message: "Session not found" });
        }
        res.status(200).json({ session });
    } catch (error) {
        console.error("Error fetching session by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function joinSession(req, res) {
    try {
        const {id}=req.params;
        const userId=req.user._id;
        const clerkId=req.user.clerkId;

        const session=await Session.findById(id);
        if(!session) {
            return res.status(404).json({ message: "Session not found" });
        }

        if(session.status!=="active") {
            return res.status(400).json({ message: "Cannot join a non-active session" });
        }

        if(session.host.toString()===userId.toString()) {
            return res.status(400).json({ message: "Host cannot join their own session as participant" });
        }

        if(session.participant) {
            return res.status(409).json({ message: "Session already has a participant" });
        }
        session.participant=userId;
        await session.save();

        const channel = chatClient.channel("messaging", session.callId);
        await channel.addMembers([clerkId]);
        res.status(200).json({ message: "Joined session successfully", session });
    } catch (error) {
        console.error("Error joining session:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function endSession(req, res) {
    try {
        const {id}=req.params;
        const userId=req.user._id;
        const session=await Session.findById(id);

        if(!session) {
            return res.status(404).json({ message: "Session not found" });
        }
        if(session.host.toString()!==userId.toString()) {
            return res.status(403).json({ message: "Only the host can end the session" });
        }

        if(session.status==="completed") {
            return res.status(400).json({ message: "Session is already completed" });
        }

        

        const call=streamClient.video.call("default", session.callId);
        await call.delete({hard:true});

        const channel = chatClient.channel("messaging", session.callId);
        await channel.delete();

        session.status="completed";
        await session.save();


        res.status(200).json({ message: "Session ended successfully", session });
    } catch (error) {
        console.error("Error ending session:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}