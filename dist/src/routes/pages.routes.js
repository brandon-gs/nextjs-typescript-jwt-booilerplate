"use strict";
/*

 @url /

 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../../index");
const router = express_1.Router();
router.get("/", (req, res) => {
    return index_1.nextApp.render(req, res, "/", {});
});
router.get("/register", (req, res) => {
    if (req.cookies.token) {
        return res.redirect("/");
    }
    else {
        return index_1.nextApp.render(req, res, "/register", {});
    }
});
router.get("/login", (req, res) => {
    if (req.cookies.token) {
        return res.redirect("/");
    }
    else {
        return index_1.nextApp.render(req, res, "/login", {});
    }
});
router.get("/profile", (req, res) => {
    if (req.cookies.token) {
        return index_1.nextApp.render(req, res, "/profile", {});
    }
    else {
        return res.redirect("/");
    }
});
exports.default = router;
//# sourceMappingURL=pages.routes.js.map