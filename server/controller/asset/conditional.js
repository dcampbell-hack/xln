import ErrorResponse from '../../utils/errorResponse.js';
import asyncHandler from '../../middleware/async.js';
import Asset from '../../model/Asset.js';
import Conditional from '../../model/Conditional.js';

//@desc Get Conditional
//@route GET /api/v1/conditionals/:id
//@access Public 
// exports.getConditional = asyncHandler(async (req, res, next ) => {

// const review = await Review.findById(req.params.id)
//                            .populate({ path: 'asset', select: 'name description'})

// if(!review){
//     return next(new ErrorResponse(`No review with the id of ${req.params.id}`, 404))
// }

// res.status(200).json({
//     succes: true,
//     data: review
// });

// })

//@desc Get Conditionals 
//@route GET /api/v1/conditionals       
//@access Public 
export const getConditional  = asyncHandler(async (req, res, next ) => {
    if(req.params.assetId){
        const conditionals = await Conditional.find({ asset: req.params.assetId });
        return res.status(200).json({
            success: true,
            count: conditionals.length,
            data: conditionals
        })
      } else {
          res.status(200).json(res.advancedResults)
      }
})

//@desc Add Review
//@route POST /api/v1/:assetId/reviews 
//@access Public 
export const createConditional = asyncHandler(async (req, res, next ) => {
req.body.asset = req.params.assetId;
req.body.user = req.user.id

const asset = Asset.findById(req.params.assetId);

if(!asset){
    return next(new ErrorResponse(`No asset with the id ${req.params.assetId}`, 404))
}

const conditionals = await Conditional.find({ asset: req.params.assetId });

if(conditionals.length > 0){
    return next(new ErrorResponse(`Conditionals can only be updated`, 401))

} else {

const conditional = await Conditional.create(req.body);
res.status(201).json({
    success: true,
    data: conditional
})

}

})

//@desc Update Review
//@route GET /api/v1/reviews/:id
//@access Public 
export const updateConditional = asyncHandler(async (req, res, next ) => {
 let conditional = await Conditional.findOne({ asset: req.params.assetId });

 console.log('CONDITIONALS ----------', conditional, req.params.assetId );

 if(!conditional){
     return next(new ErrorResponse(`No conditional with the id of ${req.params.assetId}`, 404))
 }
//Make sure review belongs to user or user is admin 
if(conditional.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(`Not auhtorized to update ${req.params.id}`, 404)
}
conditional = await Conditional.findOneAndUpdate({ asset: req.params.assetId}, req.body, { new: true, runValidators: true});
res.status(200).json({
  success: true,
  data: conditional  
})

})

// //@desc Delete Review 
// //@route GET /api/v1/reviews/:id 
// //@access Public 
// exports.deleteReview = asyncHandler(async (req, res, next ) => {
//     const review = await Review.findById(req.params.id);
//     if(!review){
//         return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
//     }
//     // Make sure user is share owner 
//     if(review.user.toString() !== req.user.id && req.user.role !== 'admin'){
//         return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this review.`, 404))
//     }
//     await review.remove();
//     res.status(200).json({ success: true, data: {} })
// })