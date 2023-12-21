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
exports.searchCategory = exports.getCategoryProducts = exports.deleteCategory = exports.updateCategory = exports.getAllCategory = exports.AddCategory = void 0;
const Category_1 = __importDefault(require("../models/Category"));
const Product_1 = __importDefault(require("../models/Product"));
const AddCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield Category_1.default.create(req.body);
        res.status(200).json(category);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({
                message: err.message
            });
        }
    }
});
exports.AddCategory = AddCategory;
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield Category_1.default.find();
        res.status(200).json(categories);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(404).json({ message: 'cannnot get categories' });
        }
    }
});
exports.getAllCategory = getAllCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield Category_1.default.findById(req.params.id);
        if (category) {
            const updatecategory = yield Category_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(updatecategory);
        }
        else {
            res.status(404).json('Category not found');
        }
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        }
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Category_1.default.deleteOne({ category: req.params.id });
        yield Product_1.default.deleteMany({ category: req.params.id });
        res.status(200).json('category deleted');
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        }
    }
});
exports.deleteCategory = deleteCategory;
const getCategoryProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.findById({ category: req.params.id });
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
const searchCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchCategory = yield Category_1.default.find({
            name: { $regex: req.query.category, $options: 'i' }
        });
        res.status(200).json(searchCategory);
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(400).json({ message: err.message });
    }
});
exports.searchCategory = searchCategory;
