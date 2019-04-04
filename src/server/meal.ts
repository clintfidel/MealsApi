import axios from 'axios'

interface Result {
  data: any
}

const normalizeMeals = (meals: Array<object>): Array<object> => {
  return meals.map((meal: any) => meal.meals[0])
}

const getNumberOfIngredients = (meal: any) => {
  let numberOfIngredients: number = 0;
  new Array(20).fill(1).forEach((element, index) => {
    if (meal[`strIngredient${index + 1}`] && meal[`strIngredient${index + 1}`].length > 1) {
      numberOfIngredients++;
    }
  })
  return numberOfIngredients;
}

const getTotalIngredientsAndId = (meals: any) => {
  const mealStructure = meals.map((meal: any) => {
    return {
      mealId: meal.idMeal,
      ingredient: getNumberOfIngredients(meal)
    }
  })
  return mealStructure.sort((element1: any, element2: any) => element1.ingredient - element2.ingredient)[0]
}

export const getAllMealWithLeastIngredients = async (req: any, res: any) => {
  try {

    const { mealIds } = req.body;
    const result = mealIds.map((id: number) => {
      return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    });

    const results: Array<object> = await Promise.all(result);
    const meals = await normalizeMeals(results.map((result: Result) => result.data))
    const leastIngredient = await getTotalIngredientsAndId(meals)
    return res.status(200).send(leastIngredient.mealId);
  } catch (error) {
    return error
  }
}


