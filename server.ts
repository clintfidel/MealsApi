import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import winston from 'winston';
import mealsRouter from './src/server/mealRoute'

// dotenv.config();

const port = process.env.PORT || 5600;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (_, res) => {
  res.send('Welcome Meal Lab Api');
});

app.use('/api/v1/', mealsRouter);
app.listen(port, () => {
  winston.info(`app is running on port: ${port}`);
});
