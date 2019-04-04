"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const normalizeMeals = (meals) => {
    return meals.map((meal) => meal.meals[0]);
};
const getNumberOfIngredients = (meal) => {
    let numberOfIngredients = 0;
    new Array(20).fill(1).forEach((element, index) => {
        if (meal[`strIngredient${index + 1}`] && meal[`strIngredient${index + 1}`].length > 1) {
            numberOfIngredients++;
        }
    });
    return numberOfIngredients;
};
const getTotalIngredientsAndId = (meals) => {
    const mealStructure = meals.map((meal) => {
        return {
            mealId: meal.idMeal,
            ingredient: getNumberOfIngredients(meal)
        };
    });
    return mealStructure.sort((element1, element2) => element1.ingredient - element2.ingredient)[0];
};
exports.getAllMealWithLeastIngredients = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { mealIds } = req.body;
        const result = mealIds.map((id) => {
            return axios_1.default.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        });
        const results = yield Promise.all(result);
        const meals = yield normalizeMeals(results.map((result) => result.data));
        const leastIngredient = yield getTotalIngredientsAndId(meals);
        return res.status(200).send(leastIngredient.mealId);
    }
    catch (error) {
        return error;
    }
});
//# sourceMappingURL=meal.js.map