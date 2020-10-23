"use strict";
/*

 @url /api/user

 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = require("../middlewares/authentication");
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.Router();
router.get("/", authentication_1.requireAuth, user_controller_1.getUserFromToken);
exports.default = router;
//# sourceMappingURL=user.routes.js.map