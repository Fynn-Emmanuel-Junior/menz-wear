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
exports.CreateAdmin = void 0;
const Admin_1 = __importDefault(require("../models/Admin"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function CreateAdmin() {
    return __awaiter(this, void 0, void 0, function* () {
        const pass = 'menzwear@100$%^';
        const adminPassword = yield bcryptjs_1.default.hash(pass, 10);
        try {
            const existingAdmin = yield Admin_1.default.findOne({ email: 'fynn.emmanuel100@gmail.com' });
            if (existingAdmin) {
                console.log('admin already exists.');
                return; // If super admin already exists, exit function   
            }
            const adminData = {
                email: 'fynn.emmanuel100@gmail.com',
                password: adminPassword
            };
            const admin = yield Admin_1.default.create(adminData);
            console.log('admin created succesfully');
        }
        catch (err) {
            if (err instanceof Error) {
                console.log('Cannot create admin', err.message);
            }
        }
    });
}
exports.CreateAdmin = CreateAdmin;
