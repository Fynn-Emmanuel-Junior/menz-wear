import { createProduct,updateProduct,getAllProducts } from './../controllers/ProductController';
import express from 'express'
import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';

const router = express.Router();

router.post('/create',AdminAuthMiddleware,createProduct)
router.get('/',AdminAuthMiddleware,getAllProducts)
router.post('/update',AdminAuthMiddleware,updateProduct)
