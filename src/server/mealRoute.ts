import express from 'express';
import { getAllMealWithLeastIngredients } from './meal';

const mealsRouter = express.Router();

mealsRouter.route('/meals/least-ingredients')
  .post(getAllMealWithLeastIngredients);


export default mealsRouter