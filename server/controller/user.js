import path from "path";

// Utils
import asyncHandler from "../middleware/async.js";
import advancedResults from "../middleware/advancedResults.js";
import ErrorResponse from "../utils/errorResponse.js";
import assetUpload from "../middleware/assetUpload.js";

// Model
import User from "../model/User.js";


//@desc gets all users
//@route GET /api/v1/users
//@access Private/Admin
export const getUsers = asyncHandler(async (req, res, next) => {
  const user = await User.find();
  res.status(200).json(res.advancedResults);
});

//@desc gets single user
//@route GET /api/v1/users/:id
//@access PUBLIC
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorResponse(`User does not exist`, 404));
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});

//@desc create a user
//@route POST /api/v1/users
//@access PRIVATE
export const createUser = asyncHandler(async (req, res, next) => {
  const user = User.create(req.body);
  if (!user) {
    return next(new ErrorResponse("Please check inputs", 500));
  }
  res.status(201).json({ success: true, data: user });
});


//@desc Update user
//@route PUT /api/v1/users/:id
//@access PRIVATE
export const updateUser = asyncHandler(async (req, res, next) => {


  if(req.body.username){
  const duplicateUsername = await User.findOne({ username: req.body.username });

  if (duplicateUsername) {
    res.status(409).json({ success: false, message: "This username is taken" });
   }

  }


  const user = await User.findByIdAndUpdate(req.params.id, { ...req.body }, {
    new: true,
    runValidators: true
  });

  if (!user) {
    return next(new ErrorResponse(`User does not exist`, 404));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

//@desc deletes user
//@route DELETE /api/v1/users/:id
//@access Private/Admin
export const deleteUser = asyncHandler(async (req, res, next) => {
  // Check if account owner is deleting himself
  if (
    req.user.id.toString() !== req.params.id.toString() ||
    req.user.role !== "admin"
  ) {
    next(new ErrorResponse(`Cannot delete another user's account`, 401));
  } else {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: {},
    });
  }
});

//@desc Upload photo to asset
//@route PUT /api/v1/user/:id/avatar
//@access Private
export const updateUserAvatar = asyncHandler(async (req, res, next) => {
  console.log('Update User Avatar', req.files )
  const user = await User.findByIdAndUpdate(req.params.id, { updated: true })
  assetUpload(User, "image", "avatar", req, res, next);
});

//@desc Upload cover photo to asset
//@route PUT /api/v1/user/:id/cover
//@access Private
export const updateUserCover = asyncHandler(async (req, res, next) => {
  console.log('Update User Cover', req.body)
  const user = await User.findByIdAndUpdate(req.params.id, { updated: true })
  assetUpload(User, "image", "cover", req, res, next);
});
