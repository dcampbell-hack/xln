// Models
const Conditional = require('../model/Conditional');
const Asset = require('../model/Asset');
const Category = require('../model/Category');
const Shares = require('../model/Share');

// Utils
const ErrorResponse = require('../utils/errorResponse');
const geocoder = require('../utils/geocoder');
const axios = require('axios');
const path = require('path');

// Middleware
const { checkConditionals, preventPublicKnowledge } = require('../middleware/checkIfValidAsset')

const assetUpload = require('../middleware/assetUpload');
const checkCategories = require('../middleware/checkModelForDuplicate');
const asyncHandler = require('../middleware/async');


//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
exports.getAssets = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults)
});

//@desc get user assets
//route GET /api/v1/assets
//@access PRIVATE
exports.getUserAssets = asyncHandler(async (req, res, next) => {

    const userAssets = await Asset.find({ user: req.body.id })
    if(!userAssets){
        return res.status(500).json({ success: false, error: "The user has not created any assets"})
    }
    console.log('User Asset ---', userAssets )
    res.status(200).json({ success: true, data: userAssets })
});

//@desc get single asset
//route GET /api/v1/assets/:id
//@access PRIVATE
exports.getAsset = asyncHandler(async (req, res, next) => {
const user = req.user;


const asset = await Asset.findById(req.params.id);
if(!asset){
    return next(new ErrorResponse(`Asset not found ID of ${req.params.id}`, 404))
}

// Check conditionals
await checkConditionals(next, req.params.id)
await preventPublicKnowledge(next, req.params.id )


let category = await Category.find();

if(!category){
   category = [];
}


// const share = await Shares.findOne({ user: user._id })

// // if(user._id !== share.user ){
// //     next(new ErrorResponse(`You must own a share of this asset to access it.`, 500) )
// // }

res.status(200).json({ success: true,  data: { asset, category } })
   
});


//@desc create single asset
//route POST /api/v1/assets
//@access PRIVATE
exports.createAsset = asyncHandler(async (req, res, next) => {
   //Add User to body 
   req.body.user = req.user.id;

   console.log('Create Asset Body ----> ', req.body )

   //If user is not admin they can only add one Asset
   if(req.user.role === 'system'){
       return next(new ErrorResponse(`System users are not allowed to publish assets`, 400))
   }

const fee = Number(req.body.price) * 0.03;
const price = Number(req.body.price) - fee;

   // Check Conditionals
// await checkConditionals(next, req.user.id)
// assetUpload(Asset, 'image', 'asset', req, res, next);

   const asset = await Asset.create({ ...req.body, fee, price  });
   res.status(200).json({ success: true, data: asset })

});


//@desc update single asset
//route PUT /api/v1/assets/:id
//@access PRIVATE
exports.updateAsset = asyncHandler(async (req, res, next) => {

// Check conditionals
await checkConditionals(next, req.params.id)

let asset = await Asset.findById(req.params.id);
if(!asset){
        return next(new ErrorResponse(`Asset not updated with ID of ${req.params.id}`, 404))
    }
    asset = await Asset.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({ success: true, data: asset })
});

//@desc delete single asset
//route DELETE /api/v1/assets/:id
//@access PRIVATE
exports.deleteAsset = asyncHandler(async (req, res, next) => {

 // Check Conditionals
await checkConditionals(next, req.params.id)   

const asset = await Asset.findById(req.params.id);
    
    if(!asset){
        return next(new ErrorResponse(`Assets not found with of ${req.params.id}`, 404))
    }

// Make sure user is share owner 
if(asset.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this comment.`, 404))
}

    asset.remove();
    res.status(200).json({ success: true, data: {}, msg: 'Asset deleted'})
});

//@desc Upload photo to asset 
//@route PUT /api/v1/asset/:id/cover
//@access PRIVATE 
exports.assetCoverUpload = asyncHandler(async(req, res, next) => {

// Check Conditionals
await checkConditionals(next, req.params.id)

console.log('Upload Asset ----', req.params.id)
assetUpload(Asset, 'image', 'asset', req, res, next);
})

//@desc Get assets within radius 
//@route GET /api/v1/asset/radius/:zipcode/:distance 
//@access PUBLIC 
exports.getAssetsInRadius = asyncHandler(async(req, res, next) => {
    const { zipcode, distance } = req.params;
    const loc = await geocoder.geocode(zipcode)
    const lat = loc[0].latitude;
    const lng = loc[0].longitude;

    //Calc Radius using radians 
    //Divide distance by radius of Earth 
    //Earth radius = 3963 / 6378 km 
    const radius = distance / 3963;

    const assets = await Asset.find({
        location: { $geoWithin: { $centerSphere: [[lng, lat], radius] }}
    });

    res.status(200).json({ success: true, count: asset.length, data: assets })
})
