import express from 'express';
import {
    placeOrder,
    getAllOrders,
    getOrder,
    recentOrders,
    searchOrder
} from '../controllers/OrderController'
import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';

const router = express.Router();

router.get('/getAllOrders',AdminAuthMiddleware,getAllOrders)
router.get('/searchOrder',AdminAuthMiddleware,searchOrder)
router.get('/getOrder',AdminAuthMiddleware,getOrder)
router.get('/recentOrders',AdminAuthMiddleware,recentOrders)
router.post('placeOrder',AdminAuthMiddleware,placeOrder)



export default router