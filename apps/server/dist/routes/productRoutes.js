"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = require("./../controllers/ProductController");
const express_1 = __importDefault(require("express"));
const AdminAuthMiddleware_1 = require("../middlewares/AdminAuthMiddleware");
const router = express_1.default.Router();
router.post('/create', ProductController_1.createProduct);
router.get('/', AdminAuthMiddleware_1.AdminAuthMiddleware, ProductController_1.getAllProducts);
router.post('/update:id', AdminAuthMiddleware_1.AdminAuthMiddleware, ProductController_1.updateProduct);
router.delete('/delete:id', AdminAuthMiddleware_1.AdminAuthMiddleware, ProductController_1.deleteProduct);
router.get('/category-products:id', AdminAuthMiddleware_1.AdminAuthMiddleware, ProductController_1.getCategoryProducts);
exports.default = router;
