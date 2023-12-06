"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const UserAuthMiddleware_1 = require("../middlewares/UserAuthMiddleware");
const router = express_1.default.Router();
router.post('/register', userController_1.registerController);
router.post('/login', userController_1.loginController);
router.post('/logout', UserAuthMiddleware_1.UserAuthMiddleware, userController_1.logoutController);
router.put('/update', UserAuthMiddleware_1.UserAuthMiddleware, userController_1.updateController);
exports.default = router;
