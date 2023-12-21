"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrderController_1 = require("../controllers/OrderController");
const AdminAuthMiddleware_1 = require("../middlewares/AdminAuthMiddleware");
const router = express_1.default.Router();
router.get('/getAllOrders', AdminAuthMiddleware_1.AdminAuthMiddleware, OrderController_1.getAllOrders);
router.get('/searchOrder', AdminAuthMiddleware_1.AdminAuthMiddleware, OrderController_1.searchOrder);
router.get('/getOrder', AdminAuthMiddleware_1.AdminAuthMiddleware, OrderController_1.getOrder);
router.get('/recentOrders', AdminAuthMiddleware_1.AdminAuthMiddleware, OrderController_1.recentOrders);
router.post('placeOrder', AdminAuthMiddleware_1.AdminAuthMiddleware, OrderController_1.placeOrder);
exports.default = router;
