import express from "express";
import {
    registerController,
    loginController,
    logoutController,
    updateController
} from '../controllers/userController'
import { UserAuthMiddleware } from "../middlewares/UserAuthMiddleware";

const router = express.Router();

router.post('/register',registerController)
router.post('/login',loginController)
router.post('/logout',UserAuthMiddleware,logoutController)
router.put('/update',UserAuthMiddleware,updateController)


export default router