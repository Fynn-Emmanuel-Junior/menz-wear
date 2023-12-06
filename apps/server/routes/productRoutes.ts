import 
{ 
    createProduct,
    updateProduct,
    getAllProducts,
    deleteProduct, 
    getCategoryProducts
} from './../controllers/ProductController';
import express from 'express'
import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';

const router = express.Router();

router.post('/create',createProduct)
router.get('/',AdminAuthMiddleware,getAllProducts)
router.post('/update',AdminAuthMiddleware,updateProduct)
router.delete('/delete', AdminAuthMiddleware,deleteProduct)
router.get('/category-products:id',AdminAuthMiddleware,getCategoryProducts)

export default router
