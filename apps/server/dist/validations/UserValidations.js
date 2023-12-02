"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginValidation = exports.userSignupValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const userSignupValidation = (data) => {
    const userSchema = joi_1.default.object({
        username: joi_1.default.string().required(),
        email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'uk', 'net'] } }).required(),
        password: joi_1.default.string().pattern(/^[a-zA-Z0-9]{8,15}$/).required()
    });
    return userSchema.validate(data);
};
exports.userSignupValidation = userSignupValidation;
const userLoginValidation = (data) => {
    const userschema = joi_1.default.object({
        password: joi_1.default.string().pattern(/^[a-zA-Z0-9]{8,15}$/).required(),
        email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'uk'] } })
    });
    return userschema.validate(data);
};
exports.userLoginValidation = userLoginValidation;
