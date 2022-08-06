const crypto = require('crypto');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const sendEmail = require('../utils/sendEmail');
const newEmail = require('../utils/newEmail');
const User = require('../model/User');
const sendTokenResponse = require('../middleware/sendToken');


//@desc Register user 
//@route POST /api/v1/auth/register 
//@access Public 
exports.register = asyncHandler(async (req, res, next) => {
    const { firstname, lastname, username, email, password, role } = req.body;
    //Create user 
    const user = await User.create({
        firstname, lastname, username, email, password, role
    });

    sendTokenResponse(user, 200, res)
})

//@desc Login user 
//@route POST /api/v1/auth/login
//@access Public 
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    
    // Validate password & email
    if(!email || !password ){
        return next(new ErrorResponse('Please provide an email and password', 400))
    }

    // Check for user 
    const user = await User.findOne({ email }).select('+password');

    if(!user){
        return next(new ErrorResponse('Invalid credentials', 401))
    }

    // Check if password matches 
    const isMatch = await user.matchPassword(password);

    if(!isMatch){
       return next(new ErrorResponse('Invalid credentials', 401))
    }
    
    await sendTokenResponse(user, 200, res, next);

    });

//@desc Logout user / clear cookie
//@route /api/v1/auth/logout 
//@access Private 
exports.logout = asyncHandler(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        data: {}
    })

})


//@desc Update password 
//@route PUT /api/v1/auth/updatepassword 
//@ access Private 
exports.updatePassword = asyncHandler(async (req, res, next) => {
    // Get User 
    const user = await User.findById(req.user.id).select('+password') 

    // Check current password 
    if(!(await user.matchPassword(req.body.currentPassword))){
        return next(new ErrorResponse('Password is incorrect', 401 ))
    }

user.password = req.body.newPassword;
await user.save();

sendTokenResponse(user, 200, res);

})

//@desc Get current logged user 
//@route POST /api/v1/auth/me 
//@access Public 
exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        data: user
    })
})


//@desc Forgot password 
//@route POST /api/v1/auth/forgotpassword
//@access Public 
exports.forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if(!user){
        res.status(404).send({ error: 'There is no user with that email'  })
        return next(new ErrorResponse('There is no user with that email', 404));
    }

    //Get reset token 
    const resetToken = await user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false })
    const resetUrl = `${req.protocol}://${req.get('host')}/resetpassword/${resetToken}`;
    const message = `You are recieving this email you (or someone else) has 
    requested the rest of a password. Please make a PUT request to: \n\n ${resetUrl}`;

    try{ 

        await newEmail({
            email: user.email,
            subject: 'Password reset token',
            message
        })

res.status(200).json({ success: true, data: 'Email sent'});

    } catch(err){
        console.log(err);
        await user.save({ validateBeforeSave: false });
        return next( new ErrorResponse('Email could not be sent', 500 ))
    }

});

//@desc Reset password 
//@route PUT /api/v1/auth/resetpassword/:resetToken 
//@access Public 
exports.resetPassword = asyncHandler(async (req, res, next) => {
    //Get hashed token
    const resetPasswordToken = crypto.createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex');
    
    console.log('RESET TOKEN USER', resetPasswordToken, 'params', req.params.resetToken )

    const user = await User.findOne({ 
        resetPasswordToken
    });

    if(!user){
        return next(new ErrorResponse('Invalid Token', 400));
    }


    //Set new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    
    sendTokenResponse(user, 200, res);
})



//@desc Update current user 
//@route PUT /api/v1/auth/updatedetails
//@access Private 
exports.updateDetails = asyncHandler(async (req, res, next) => {
    const fieldsToUpdate = {
        username: req.body.username, 
        email: req.body.email
    }
    
    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
        new: true, runValidators: true
    });
    
    res.status(200).json({
        success: true,
        data: user             
    })
    
    })

