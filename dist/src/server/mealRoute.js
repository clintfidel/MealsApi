"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const meal_1 = require("./meal");
const mealsRouter = express_1.default.Router();
mealsRouter.route('/meals/least-ingredients')
    .post(meal_1.getAllMealWithLeastIngredients);
exports.default = mealsRouter;
//# sourceMappingURL=mealRoute.js.map