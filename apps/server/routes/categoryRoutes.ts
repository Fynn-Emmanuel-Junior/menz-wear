import express from 'express'
import { createCategory,getAllCategory } from '../controllers/CategoryController'
import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware'

const router = express.Router()

router.post('/craete',AdminAuthMiddleware,createCategory)
router.get('/',AdminAuthMiddleware,getAllCategory)

export default router

