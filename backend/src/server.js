import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

const __dirname = path.resolve();

// API routes
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Api is up and running" });
});

app.get("/books", (req, res) => {
  res.status(200).json({ message: "this is books endpoint" });
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