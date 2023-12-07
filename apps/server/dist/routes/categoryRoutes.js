"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CategoryController_1 = require("../controllers/CategoryController");
const AdminAuthMiddleware_1 = require("../middlewares/AdminAuthMiddleware");
const router = express_1.default.Router();
router.post('/craete', AdminAuthMiddleware_1.AdminAuthMiddleware, CategoryController_1.createCategory);
router.get('/', AdminAuthMiddleware_1.AdminAuthMiddleware, CategoryController_1.getAllCategory);
router.put('/update:id', AdminAuthMiddleware_1.AdminAuthMiddleware, CategoryController_1.updateCategory);
exports.default = router;
