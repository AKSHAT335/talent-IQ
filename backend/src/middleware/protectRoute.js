// // import {  requireAuth} from '@clerk/express'
// // import User from '../models/User.js';

// // export const protectRoute = [
// //     requireAuth(),
// //     async (req, res, next) => {
// //         try {
// //             const clerkId = req.auth().userId;
// //             if (!clerkId) {
// //                 return res.status(401).json({ message: 'Unauthorized: No clerk ID found' });
// //             }
// //             //find user in db by clerkId
// //             const user = await User.findOne({ clerkId });
// //             if (!user) {
// //                 return res.status(401).json({ message: 'Unauthorized: User not found' });
// //             }
// //             //attach user to req object
// //             req.user = user;
// //             next();
// //         } catch (error) {
// //             console.error("Error in protectRoute middleware:", error);
// //             res.status(500).json({ message: "Internal server error" });
// //         }
// //     }
// // ];



// import { clerkClient } from '@clerk/express';
// import User from '../models/User.js';

// // export const protectRoute = async (req, res, next) => {
// //   try {
// //     // Clerk v4 – the correct way
// //     const { userId, sessionId } = req.auth();

// //     if (!userId || !sessionId) {
// //       return res.status(401).json({ message: "Unauthorized" });
// //     }

// //     // Find user in MongoDB
// //     const user = await User.findOne({ clerkId: userId });

// //     if (!user) {
// //       return res.status(401).json({ message: "Unauthorized: User not found" });
// //     }

// //     // Attach user to req
// //     req.user = user;

// //     next();
// //   } catch (error) {
// //     console.error("ProtectRoute Error:", error);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // };



// export const protectRoute = async (req, res, next) => {
//   try {
//     console.log("AUTH:", req.auth);
// console.log("HEADERS COOKIE:", req.headers.cookie);
//     // Clerk API: req.auth() returns { userId, sessionId }
//     const { userId, sessionId } = req.auth();

//     if (!userId || !sessionId) {
//       return res.status(401).json({ message: "Unauthorized: Missing auth" });
//     }

//     const user = await User.findOne({ clerkId: userId });

//     if (!user) {
//       return res.status(401).json({ message: "Unauthorized: User not found" });
//     }

//     req.user = user;
//     next();

//   } catch (error) {
//     console.error("ProtectRoute Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

import { clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const auth = req.auth();

    console.log("AUTH DATA:", auth);

    if (!auth?.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    let user = await User.findOne({ clerkId: auth.userId });

    // 🔥 Fix: Auto-create Mongo user if not found
    if (!user) {
      console.log("User not found in DB → Creating now...");

      const cu = await clerkClient.users.getUser(auth.userId);

      user = await User.create({
        clerkId: auth.userId,
        name: `${cu.firstName || ""} ${cu.lastName || ""}`.trim(),
        email: cu.emailAddresses[0].emailAddress,
        profileImage: cu.imageUrl,
      });

      console.log("🔥 New Mongo User Created:", user);
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("protectRoute ERROR:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
