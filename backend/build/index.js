"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use('/', (req, res) => {
    res.send('Welcome');
});
app.get('/', (req, res) => {
    res.json({ messae: 'like the video' });
});
app.listen((PORT), () => {
    console.log(`listening to server on ${PORT}`);
});
