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
exports.updateController = exports.logoutController = exports.loginController = void 0;
const AdminValidations_1 = require("./../validations/AdminValidations");
const Admin_1 = __importDefault(require("../models/Admin"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = require("../index");
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, AdminValidations_1.AdminLoginValidation)(req.body);
    if (error)
        return res.status(400).json({ message: error.message });
    const { email, password } = req.body;
    const admin = yield Admin_1.default.findOne({ email });
    const matchpassword = yield bcryptjs_1.default.compare(password, admin.password || '');
    if (matchpassword) {
        try {
            const accesstoken = jsonwebtoken_1.default.sign({ "adminId": admin._id }, index_1.ADMIN_TOKEN_SECRET);
            res.cookie('jwt', accesstoken, {
                httpOnly: true,
                sameSite: 'none',
                secure: true
            });
            res.status(200).json('login successful');
        }
        catch (err) {
            if (err instanceof Error)
                return res.status(400).json({ message: err.message });
        }
    }
    else {
        res.status(401).json('No admin found');
    }
});
exports.loginController = loginController;
const logoutController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie('jwt');
        res.status(200).json('admin logout');
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(400).json({ message: err.message });
    }
});
exports.logoutController = logoutController;
const updateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = req.user;
        if (req.body.password) {
            const salt = yield bcryptjs_1.default.genSalt(10);
            req.body.password = yield bcryptjs_1.default.hash(req.body.passowrd, salt);
        }
        const updatedAdmin = yield Admin_1.default.findByIdAndUpdate(admin._id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        }, { new: true });
        res.status(200).json('Admin updated successfully');
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(400).json({ message: err.message });
    }
});
exports.updateController = updateController;
