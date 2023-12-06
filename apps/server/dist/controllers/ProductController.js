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
exports.getCategoryProducts = exports.deleteProduct = exports.getProduct = exports.getAllProducts = exports.updateProduct = exports.createProduct = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newproduct = yield Product_1.default.create(req.body);
        res.status(200).json(newproduct);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({
                status: false,
                message: `error creating product: ${err.message}`
            });
        }
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield Product_1.default.findById(req.params.id);
    if (product) {
        const newproduct = yield Product_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            status: false,
            message: 'product updated',
            newproduct
        });
    }
    else {
        res.status(404).json('no product found');
    }
});
exports.updateProduct = updateProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.find();
        res.status(200).json(products);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(404).json({
                status: false,
                message: err.message
            });
        }
    }
});
exports.getAllProducts = getAllProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product_1.default.findById(req.params.id);
        res.status(200).json(product);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(404).json({
                status: false,
                message: err.message
            });
        }
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield Product_1.default.findById(req.params.id);
    if (!product)
        return res.status(404).json('no porduct found');
    try {
        yield Product_1.default.deleteOne({ _id: product._id });
        res.status(200).json('product deleted');
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({
                status: false,
                message: err.message
            });
        }
    }
});
exports.deleteProduct = deleteProduct;
const getCategoryProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const products = yield Product_1.default.find({ category: name });
        res.status(200).json(products);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(404).json({
                status: false,
                message: err.message
            });
        }
    }
});
exports.getCategoryProducts = getCategoryProducts;
