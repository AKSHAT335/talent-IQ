import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
    try {
        // Logic to generate and return a Stream token
        //use clerkid for stream (not mongo id) it shoudl macthc the id we have in stream
        const token = chatClient.createToken(req.user.clerkId); 
        res.status(200).json({ 
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.image
         });
    }
    catch (error) {
        console.error("Error generating Stream token:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}