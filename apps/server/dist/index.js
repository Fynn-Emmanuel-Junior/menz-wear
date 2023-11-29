"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3500;
app.get('/', (req, res) => {
    res.json('welcome to express and node js crash course');
});
app.get('/hi', (req, res) => {
    res.send('hi hello');
    console.log('we good');
});
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
