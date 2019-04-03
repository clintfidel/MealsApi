import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import winston from 'winston';

dotenv.config();

const port = process.env.PORT || 5600;
const app = express();

app.use(cors());

app.get('/', (_, res) => {
  res.send('Welcome Meal Lab Api');
});
app.listen(port, () => {
  winston.info(`app is running on port: ${port}`);
});
