"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = require("./../controllers/ProductController");
const express_1 = __importDefault(require("express"));
const AdminAuthMiddleware_1 = require("../middlewares/AdminAuthMiddleware");
const router = express_1.default.Router();
router.post('/create', AdminAuthMiddleware_1.AdminAuthMiddleware, ProductController_1.createProduct);
router.get('/', AdminAuthMiddleware_1.AdminAuthMiddleware, ProductController_1.getAllProducts);
router.post('/update', AdminAuthMiddleware_1.AdminAuthMiddleware, ProductController_1.updateProduct);
