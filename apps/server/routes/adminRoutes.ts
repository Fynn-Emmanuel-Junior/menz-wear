import express from 'express';

import {
    registerController,
    loginController,
    logoutController,
    updateController,
} from '../controllers/AdminController'
import { AdminAuthMiddleware } from '../middlewares/AdminAuthMiddleware';

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout',AdminAuthMiddleware, logoutController);
router.post('update',AdminAuthMiddleware, updateController);


export default router;