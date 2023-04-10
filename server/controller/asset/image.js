// Utils
const ErrorResponse = require('../../utils/errorResponse');

// Model
const Asset = require('../../model/Asset');
const Image = require('../../model/asset/Image');

// Middleware
const asyncHandler = require('../../middleware/async');
const { checkConditionals, preventPublicKnowledge, preventSale } = require('../../middleware/checkIfValidAsset')

//@desc Get Image
//@route GET /api/v1/images/:id
//@access Public 
exports.getImage = asyncHandler(async (req, res, next ) => {

const image = await Image.findById(req.params.id)
                           .populate({ path: 'asset', select: 'name description'})

if(!image){
    return next(new ErrorResponse(`No image with the id of ${req.params.id}`, 404))
}

//Check conditional
checkConditionals(next, image.asset )

res.status(200).json({
    succes: true,
    data: image
});

})

//@desc Get Images 
//@route GET /api/v1/images       
//@access Public 
exports.getImages = asyncHandler(async (req, res, next ) => {
    if(req.params.assetId){
       await preventPublicKnowledge(next, req.params.assetId )
        const images = await Image.find({ asset: req.params.assetId });
        return res.status(200).json({
            success: true,
            count: images.length,
            data: images
        })
      } else {
          res.status(200).json(res.advancedResults)
      }
})

//@desc Add Image
//@route POST /api/v1/:assetId/images 
//@access Public 
exports.createImage = asyncHandler(async (req, res, next ) => {
req.body.asset = req.params.assetId;
req.body.user = req.user.id

//Check conditional
checkConditionals(next, req.body.asset )

const asset = Asset.findById(req.body.asset);
if(!asset){
    return next(new ErrorResponse(`No asset with the id ${req.body.asset}`, 404))
}
const image = await Image.create(req.body);


res.status(201).json({
    success: true,
    data: image
})
})

//@desc Update Image
//@route GET /api/v1/images/:id
//@access Public 
exports.updateImage = asyncHandler(async (req, res, next ) => {

 let image = await Image.findById(req.params.id);
 if(!image){
     return next(new ErrorResponse(`No image with the id of ${req.params.id}`, 404))
 }
//Make sure image belongs to user or user is admin 
if(image.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(`Not auhtorized to update ${req.params.id}`, 404)
}
image = await Image.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
res.status(200).json({
  success: true,
  data: image  
})

})

//@desc Delete Image 
//@route GET /api/v1/images/:id 
//@access Public 
exports.deleteImage = asyncHandler(async (req, res, next ) => {
    const image = await Image.findById(req.params.id);
    if(!image){
        return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
    }
    // Make sure user is share owner 
    if(image.user.toString() !== req.user.id && req.user.role !== 'admin'){
        return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this image.`, 404))
    }
    await image.remove();
    res.status(200).json({ success: true, data: {} })
})