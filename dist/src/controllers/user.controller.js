"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFromToken = void 0;
function getUserFromToken(req, res) {
    if (req.user) {
        const { user } = req;
        return res.status(200).json({ user });
    }
    return res.status(404).json({ message: "Not authorized" });
}
exports.getUserFromToken = getUserFromToken;
//# sourceMappingURL=user.controller.js.map