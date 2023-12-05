import express from 'express';

import {
    registerController,
    loginController,
    logoutController,
    updateController,
} from '../controllers/AdminController'

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout', logoutController);
router.post('update', updateController);


export default router;