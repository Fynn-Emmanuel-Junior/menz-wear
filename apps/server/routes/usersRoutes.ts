import express from "express";
import {
    registerController,
    loginController,
    logoutController,
    updateController
} from '../controllers/userController'

const router = express.Router();

router.post('/register',registerController)
router.post('/login',loginController)
router.post('/logout',logoutController)
router.put('/update',updateController)


export default router