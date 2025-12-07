import express from 'express';
import path from 'path';
import { ENV } from './lib/env.js';

const app = express();

const __dirname = path.resolve();

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Api is up and running' });
});

app.get('/books', (req, res) => {
  res.status(200).json({ message: 'this is books endpoint' });
});

if (ENV.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}


app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});