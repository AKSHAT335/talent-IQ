// import express from "express";
// import path from "path";
// import { ENV } from "./lib/env.js";
// import cors from "cors";
// import {serve} from "inngest/express";
// import { clerkMiddleware } from '@clerk/express'

// import { connectDB } from "./lib/db.js";
// import { inngest ,functions} from "./lib/inngest.js";

// import chatRoutes from "./routes/chatRoutes.js";
// import sessionRoutes from "./routes/sessionRoute.js";

// const app = express();

// const __dirname = path.resolve();

// //middlewares
// app.use(express.json());
// // app.use(cors({ origin: ENV.CLIENT_URL,credentials:true }));
// app.use(
//   cors({
//     origin: ENV.CLIENT_URL,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );
// app.use(clerkMiddleware());//this adds auth field to req obj :req.auth();



// app.use("/api/inngest", serve({client: inngest,functions}));
// app.use("/api/chat",chatRoutes);
// app.use("/api/sessions",sessionRoutes);

// // API routes
// app.get("/health", (req, res) => {
//   res.status(200).json({ message: "Api is up and running" });
// });


// // Serve frontend in production
// if (ENV.NODE_ENV === "production") {
//   const frontendPath = path.join(__dirname, "../frontend/dist");

//   app.use(express.static(frontendPath));

//   // WILDCARD ROUTE (only correct one for Express 4)
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(frontendPath, "index.html"));
//   });
// }




// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(ENV.PORT, () => {console.log(`Server is running on port ${ENV.PORT}`);});  
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// }

// startServer(); 
import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

const app = express();
const __dirname = path.resolve();

app.use(express.json());

app.use(
  cors({
    origin: ENV.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Clerk v3 correct setup with secret key
app.use(
  clerkMiddleware({
    secretKey: ENV.CLERK_SECRET_KEY,
  })
);

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Api is up and running" });
});

if (ENV.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server is running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
