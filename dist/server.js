"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const winston_1 = __importDefault(require("winston"));
const mealRoute_1 = __importDefault(require("./src/server/mealRoute"));
// dotenv.config();
const port = process.env.PORT || 5600;
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get('/', (_, res) => {
    res.send('Welcome Meal Lab Api');
});
app.use('/api/v1/', mealRoute_1.default);
app.listen(port, () => {
    winston_1.default.info(`app is running on port: ${port}`);
});
//# sourceMappingURL=server.js.map