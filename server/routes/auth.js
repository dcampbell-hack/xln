import express from 'express';
const router = express.Router();

import { protect, authorize } from '../middleware/auth.js';
import { 
    register, 
    login, 
    logout, 
    getMe, 
    forgotPassword, 
    resetPassword, 
    username,
    updateDetails, 
    updatePassword 
} from '../controller/auth.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/username').put(username)
router.route('/logout').get(logout);
router.route('/me').get(protect, getMe);
router.route('/updatedetails').put(protect, updateDetails);
router.route('/updatepassword').post(protect, updatePassword);
router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:resetToken').put(resetPassword);

export default router;