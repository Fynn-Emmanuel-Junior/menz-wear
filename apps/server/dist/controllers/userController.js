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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateController = exports.logoutController = exports.loginController = exports.registerController = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserValidations_1 = require("../validations/UserValidations");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, UserValidations_1.userSignupValidation)(req.body);
    if (error)
        res.status(400).json({ message: `error in signing up user: ${error.message}` });
    const { username, email, password } = req.body;
    const checkIfEmailExists = yield User_1.default.findOne({ email });
    if (checkIfEmailExists)
        return res.status(400).json('User already exists');
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedpassword = yield bcryptjs_1.default.hash(req.body.password, salt);
    try {
        const user = yield User_1.default.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedpassword
        });
        res.status(200)
            .json(user)
            .json({ message: 'user login successful' });
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(400).json({ message: `error in creating user: ${err.message}` });
    }
});
exports.registerController = registerController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const { error } = (0, UserValidations_1.userLoginValidation)(req.body);
    if (error)
        return res.status(400).json({ message: `couldnt validate user ${error.message}` });
    if (!req.body.email)
        return res.status(404).json({ message: `No user found ` });
    const user = yield User_1.default.findOne({ email });
    const match = yield bcryptjs_1.default.compare(password, user.password);
    if (match) {
        const accesstoken = jsonwebtoken_1.default.sign({ "userId": user._id }, process.env.ACCESS_TOKEN_SECRET);
        res.cookie('jwt', accesstoken, {
            httpOnly: true,
            sameSite: 'none',
            secure: true
        });
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.username
        });
    }
    else {
        res.status(401).json('Unauthorized user');
    }
});
exports.loginController = loginController;
const logoutController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie('jwt');
        res.status(401).json({ message: 'user has been logout' });
    }
    catch (err) {
        res.status(400).json({ message: 'error in logging out user' });
    }
});
exports.logoutController = logoutController;
const updateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.password) {
            const salt = yield bcryptjs_1.default.genSalt(10);
            req.body.password = yield bcryptjs_1.default.hash(req.body.password, salt);
        }
        const user = yield User_1.default.findByIdAndUpdate(req.body.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        }, { new: true });
        const { password } = user, rest = __rest(user, ["password"]);
        res.status(200).json(rest);
    }
    catch (err) {
        res.status(400).json('error in updating user');
    }
});
exports.updateController = updateController;
