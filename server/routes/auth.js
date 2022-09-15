const express = require('express');
const router = express.Router();

const { protect, authorize } = require('../middleware/auth');
const { 
    register, 
    login, 
    logout, 
    getMe, 
    forgotPassword, 
    resetPassword, 
    username,
    updateDetails, 
    updatePassword 
} = require('../controller/auth');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/username').put(username)
router.route('/logout').get(logout);
router.route('/me').get(protect, getMe);
router.route('/updatedetails').put(protect, updateDetails);
router.route('/updatepassword').post(protect, updatePassword);
router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:resetToken').put(resetPassword);

module.exports = router;