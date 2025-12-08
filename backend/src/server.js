import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import cors from "cors";
import {serve} from "inngest/express";
import { clerkMiddleware } from '@clerk/express'

import { connectDB } from "./lib/db.js";
import { inngest ,functions} from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";

const app = express();

const __dirname = path.resolve();

//middlewares
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL,credentials:true }));
app.use(clerkMiddleware());//this adds auth field to req obj :req.auth();

app.use("/api/inngest", serve({client: inngest,functions}));
app.use("/api/chat",chatRoutes);

// API routes
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Api is up and running" });
});


// Serve frontend in production
if (ENV.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(frontendPath));

  // WILDCARD ROUTE (only correct one for Express 4)
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}




const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {console.log(`Server is running on port ${ENV.PORT}`);});  
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer(); 