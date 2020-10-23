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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const passport_jwt_1 = require("passport-jwt");
const user_model_1 = __importDefault(require("../models/user.model"));
// Setting local strategy:
const localOptions = { usernameField: "username", passwordField: "password" };
const localLogin = new passport_local_1.Strategy(localOptions, (username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOne({
            $or: [{ $or: [{ username }] }, { $or: [{ email: username }] }],
        });
        if (!user) {
            return done(null, false, { message: "Invalid username or email" });
        }
        const isMatch = yield user.matchPassword(password);
        if (!isMatch) {
            return done(null, false, { message: "Invalid password " });
        }
        return done(null, user);
    }
    catch (e) {
        return done(null, false, {
            message: "Local login strategy: error in server",
        });
    }
}));
// Setting the jwt strategy
const jwtOptions = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromHeader("authorization"),
    secretOrKey: process.env.JWT_SECRET,
};
const jwtLogin = new passport_jwt_1.Strategy(jwtOptions, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findById(payload._id);
        if (user) {
            done(null, user);
        }
        else {
            done(null, false, { message: "Invalid token" });
        }
    }
    catch (e) {
        done(null, false, { message: "Jwt login strategy: error in server" });
    }
}));
passport_1.default.use(localLogin);
passport_1.default.use(jwtLogin);
//# sourceMappingURL=passport.js.map