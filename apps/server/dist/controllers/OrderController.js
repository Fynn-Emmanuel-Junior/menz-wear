"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrder = exports.recentOrders = exports.deleteOrder = exports.getOrder = exports.getAllOrders = exports.placeOrder = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const placeOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order_1.default.create({
            orderId: Math.floor(Math.random() * 6),
            customerName: req.body.customerName,
            productName: req.body.productName,
            shippingAddress: req.body.shippingAddress,
            amount: req.body.amount,
            qunatity: req.body.quantity,
            status: req.body.status
        });
        res.status(200).json(order);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        }
    }
});
exports.placeOrder = placeOrder;
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allOrders = yield Order_1.default.find();
        res.status(400).json(allOrders);
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(400).json({ message: err.message });
    }
});
exports.getAllOrders = getAllOrders;
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order_1.default.findById(req.params.id);
        if (order) {
            res.status(200).json(order);
        }
        else {
            res.status(404).json('No order found');
        }
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(400).json({ message: err.message });
    }
});
exports.getOrder = getOrder;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(400).json({ message: err.message });
    }
});
exports.deleteOrder = deleteOrder;
const recentOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recentOrders = yield Order_1.default.find().sort({ createdAt: -1 }).limit(6).exec();
        res.status(200).json(recentOrders);
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(500).json({ message: err.message });
    }
});
exports.recentOrders = recentOrders;
const searchOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchResult = yield Order_1.default.find({
            $or: [
                { orderId: req.query.orderId },
                { customerName: { $regex: req.query.customerName, $options: 'i' } }
            ]
        });
        res.status(200).json(searchResult);
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(500).json({ message: err.message });
    }
});
exports.searchOrder = searchOrder;
