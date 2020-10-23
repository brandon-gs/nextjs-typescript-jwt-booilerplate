"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("./src/services/passport");
// Routes files
const auth_routes_1 = __importDefault(require("./src/routes/auth.routes"));
const user_routes_1 = __importDefault(require("./src/routes/user.routes"));
const app = express_1.default();
// Settings
app.set("port", process.env.PORT || 3000);
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
// Routes
app.use("/api/authentication/", auth_routes_1.default);
app.use("/api/user/", user_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map