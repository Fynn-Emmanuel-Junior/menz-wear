"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3500;
app.get('/', (req, res) => {
    res.send('hello from express');
});
app.get('/express', (req, res) => {
    res.json('hello from express');
});
app.get('/hello', (req, res) => {
    res.json('hello from express');
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
