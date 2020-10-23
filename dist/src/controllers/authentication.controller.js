"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const passport_1 = __importDefault(require("passport"));
function createToken(user) {
    return jsonwebtoken_1.default.sign({ _id: user._id }, process.env.JWT_SECRET || "DEFAULT_JWT_SECRET");
}
exports.login = (req, res, next) => {
    passport_1.default.authenticate("local", { session: false }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.status(401).json({ message: info.message });
            return;
        }
        res
            .status(200)
            .json({ token: createToken(user), message: "Login successfully" });
    })(req, res, next);
};
exports.register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(422).json({ message: "All fields must be provided" });
    }
    let existingUser = yield user_model_1.default.findOne({ email });
    if (existingUser) {
        return res.status(422).json({ message: "Email is already in use..." });
    }
    existingUser = yield user_model_1.default.findOne({ username });
    if (existingUser) {
        return res.status(422).json({ message: "Username is already in use..." });
    }
    const user = yield new user_model_1.default({
        username,
        email,
        password,
    }).save();
    return res.status(200).json({ token: createToken(user) });
});
//# sourceMappingURL=authentication.controller.js.map