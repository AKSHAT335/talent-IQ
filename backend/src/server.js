import express from 'express';
import { ENV } from './lib/env.js';

const app = express();

console.log(ENV.PORT);
console.log(ENV.DB_URL);

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Api is up and running' });
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});