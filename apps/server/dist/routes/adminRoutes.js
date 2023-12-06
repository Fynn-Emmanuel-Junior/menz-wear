"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AdminController_1 = require("../controllers/AdminController");
const router = express_1.default.Router();
router.post('/register', AdminController_1.registerController);
router.post('/login', AdminController_1.loginController);
router.post('/logout', AdminController_1.logoutController);
router.post('update', AdminController_1.updateController);
exports.default = router;
