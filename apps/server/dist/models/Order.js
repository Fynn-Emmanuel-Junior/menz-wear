"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    orderId: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: 'Pending',
        required: true
    }
}, { timestamps: true });
const OrderModel = mongoose_1.default.model('OrderModel', orderSchema);
exports.default = OrderModel;
