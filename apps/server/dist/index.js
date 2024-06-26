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
exports.ADMIN_TOKEN_SECRET = exports.ACCESS_TOKEN_SECRET = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const CreateAdmin_1 = require("./utils/CreateAdmin");
const database = process.env.DATABASE_URI;
//ENV 
exports.ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
exports.ADMIN_TOKEN_SECRET = process.env.ADMIN_TOKEN_SECRET;
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3500;
// middlewwares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
//Routes
app.use('/users', usersRoutes_1.default);
app.use('/products', productRoutes_1.default);
app.use('orders', orderRoutes_1.default);
app.use('/admin', adminRoutes_1.default);
app.use('/category', categoryRoutes_1.default);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(database)
        .then(() => {
        (0, CreateAdmin_1.CreateAdmin)();
        console.log(`server running on port ${PORT}`);
    })
        .catch((err) => console.log(`database connectivity failed: ${err.message}`));
}));
