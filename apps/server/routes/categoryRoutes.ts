import express from 'express'
import { 
    AddCategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
    searchCategory 
} from '../controllers/CategoryController'
import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware'

const router = express.Router()

router.post('/craete',AdminAuthMiddleware,AddCategory)
router.get('/',AdminAuthMiddleware,getAllCategory)
router.put('/update:id',AdminAuthMiddleware,updateCategory)
router.delete('/delete:id',AdminAuthMiddleware,deleteCategory)
router.get('/search-category',AdminAuthMiddleware,searchCategory)

export default router

