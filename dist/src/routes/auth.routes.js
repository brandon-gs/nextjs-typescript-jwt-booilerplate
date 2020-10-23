"use strict";
/*

 @url /api/authentication

 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_controller_1 = require("../controllers/authentication.controller");
const router = express_1.Router();
router.post("/login", authentication_controller_1.login);
router.post("/register", authentication_controller_1.register);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map