import express from 'express'
import { AddCategory,getAllCategory,updateCategory,deleteCategory } from '../controllers/CategoryController'
import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware'

const router = express.Router()

router.post('/craete',AdminAuthMiddleware,AddCategory)
router.get('/',AdminAuthMiddleware,getAllCategory)
router.put('/update:id',AdminAuthMiddleware,updateCategory)
router.delete('/delete:id',AdminAuthMiddleware,deleteCategory)

export default router

