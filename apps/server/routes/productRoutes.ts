import 
{ 
    AddProduct,
    updateProduct,
    getAllProducts,
    deleteProduct, 
} from './../controllers/ProductController';
import express from 'express'
import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';

const router = express.Router();

router.post('/create',AdminAuthMiddleware,AddProduct)
router.get('/',AdminAuthMiddleware,getAllProducts)
router.post('/update:id',AdminAuthMiddleware,updateProduct)
router.delete('/delete:id', AdminAuthMiddleware,deleteProduct)

export default router
