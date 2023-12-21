"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AdminController_1 = require("../controllers/AdminController");
const AdminAuthMiddleware_1 = require("../middlewares/AdminAuthMiddleware");
const router = express_1.default.Router();
router.post('/register', AdminController_1.registerController);
router.post('/login', AdminController_1.loginController);
router.post('/logout', AdminAuthMiddleware_1.AdminAuthMiddleware, AdminController_1.logoutController);
router.post('update', AdminAuthMiddleware_1.AdminAuthMiddleware, AdminController_1.updateController);
exports.default = router;
