// Utils
const ErrorResponse = require('../../utils/errorResponse');

// Model
const Asset = require('../../model/Asset');
const Text = require('../../model/asset/Text');

// Middleware
const asyncHandler = require('../../middleware/async');
const { checkConditionals, preventPublicKnowledge, preventSale } = require('../../middleware/checkIfValidAsset')

//@desc Get Text
//@route GET /api/v1/texts/:id
//@access Public 
exports.getText = asyncHandler(async (req, res, next ) => {

const text = await Text.findById(req.params.id)
                           .populate({ path: 'asset', select: 'name description'})

if(!text){
    return next(new ErrorResponse(`No review with the id of ${req.params.id}`, 404))
}

//Check conditional
checkConditionals(next, text.asset )

res.status(200).json({
    succes: true,
    data: text
});

})

//@desc Get Reviews 
//@route GET /api/v1/reviews       
//@access Public 
exports.getTexts = asyncHandler(async (req, res, next ) => {
    if(req.params.assetId){
       await preventPublicKnowledge(next, req.params.assetId )
        const texts = await Text.find({ asset: req.params.assetId });
        return res.status(200).json({
            success: true,
            count: texts.length,
            data: texts
        })
      } else {
          res.status(200).json(res.advancedResults)
      }
})

//@desc Create Text
//@route POST /api/v1/:assetId/texts
//@access Public 
exports.createText = asyncHandler(async (req, res, next ) => {
req.body.asset = req.params.assetId;
req.body.user = req.user.id

//Check conditional
checkConditionals(next, req.body.asset )

const asset = Asset.findById(req.body.asset);
if(!asset){
    return next(new ErrorResponse(`No asset with the id ${req.body.asset}`, 404))
}
const text = await Text.create(req.body);


res.status(201).json({
    success: true,
    data: text
})
})

//@desc Update Text
//@route GET /api/v1/texts/:id
//@access Public 
exports.updateText = asyncHandler(async (req, res, next ) => {

 let text = await Text.findById(req.params.id);
 if(!text){
     return next(new ErrorResponse(`No review with the id of ${req.params.id}`, 404))
 }
//Make sure review belongs to user or user is admin 
if(text.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(`Not auhtorized to update ${req.params.id}`, 404)
}
text = await Text.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
res.status(200).json({
  success: true,
  data: text  
})

})

//@desc Delete Review 
//@route GET /api/v1/texts/:id 
//@access Public 
exports.deleteText = asyncHandler(async (req, res, next ) => {
    const text = await Text.findById(req.params.id);
    if(!text){
        return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
    }
    // Make sure user is share owner 
    if(text.user.toString() !== req.user.id && req.user.role !== 'admin'){
        return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this text.`, 404))
    }
    await text.remove();
    res.status(200).json({ success: true, data: {} })
})