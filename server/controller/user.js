const asyncHandler = require('../middleware/async');
const advancedResults = require('../middleware/advancedResults');
const ErrorResponse = require('../utils/errorResponse');
const path = require('path');
const assetUpload = require('../middleware/assetUpload');


const User = require('../model/User');

//@desc gets all users 
//@route GET /api/v1/users
//@access Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
    const user = await User.find()
    res.status(200).json(res.advancedResults)
});

//@desc gets single user 
//@route GET /api/v1/users/:id 
//@access PUBLIC
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorResponse(`User does not exist`, 404))
    }
    res.status(200).json({ 
        success: true,
        data: user
    })
});

//@desc create a user 
//@route POST /api/v1/users
//@access PRIVATE
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = User.create(req.body);
    if(!user){
        return next(new ErrorResponse('Please check inputs', 500))
    }
    res.status(201).json({ success: true, data: user })
});

//@desc Update user 
//@route PUT /api/v1/users/:id 
//@access PRIVATE
exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { 
        new: true, runValidators: true
    });

    if(!user){
        return next(new ErrorResponse(`User does not exist`, 404))
    }



    res.status(200).json({ 
        success: true,
        data: user
    })
});

//@desc deletes user 
//@route DELETE /api/v1/users/:id 
//@access Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {

// Check if account owner is deleting himself
if(req.user.id.toString() !== req.params.id.toString() || req.user.role !== 'admin' ){

    next( new ErrorResponse(`Cannot delete another user's account`, 401))

} else {
 
    await User.findByIdAndDelete(req.params.id);
   
    res.status(200).json({
        success: true,
        data: {}
    })   
}

});

//@desc Upload photo to asset 
//@route PUT /api/v1/user/:id/avatar
//@access Private
exports.updateUserAvatar = asyncHandler(async (req, res, next) => {
    assetUpload(User, 'image', 'avatar', req, res, next)
 });


 //@desc Upload cover photo to asset 
//@route PUT /api/v1/user/:id/cover
//@access Private
exports.updateUserCover = asyncHandler(async (req, res, next) => {
    assetUpload(User, 'image', 'cover', req, res, next)
 });