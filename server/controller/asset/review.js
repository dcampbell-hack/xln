// Utils
import ErrorResponse from '../../utils/errorResponse.js';

// Model
import Asset from '../../model/Asset.js';
import Review from '../../model/asset/Review.js';

// Middleware
import asyncHandler from '../../middleware/async.js';
import { checkConditionals, preventPublicKnowledge, preventSale } from '../../middleware/checkIfValidAsset.js'

//@desc Get Review
//@route GET /api/v1/reviews/:id
//@access Public 
export const getReview = asyncHandler(async (req, res, next ) => {

const review = await Review.findById(req.params.id)
                           .populate({ path: 'asset', select: 'name description'})

if(!review){
    return next(new ErrorResponse(`No review with the id of ${req.params.id}`, 404))
}

//Check conditional
checkConditionals(next, review.asset )

res.status(200).json({
    succes: true,
    data: review
});

})

//@desc Get Reviews 
//@route GET /api/v1/reviews       
//@access Public 
export const getReviews = asyncHandler(async (req, res, next ) => {
    if(req.params.assetId){
       await preventPublicKnowledge(next, req.params.assetId )
        const reviews = await Review.find({ asset: req.params.assetId });
        return res.status(200).json({
            success: true,
            count: reviews.length,
            data: reviews
        })
      } else {
          res.status(200).json(res.advancedResults)
      }
})

//@desc Add Review
//@route POST /api/v1/:assetId/reviews 
//@access Public 
export const addReview = asyncHandler(async (req, res, next ) => {
req.body.asset = req.params.assetId;
req.body.user = req.user.id

//Check conditional
checkConditionals(next, req.body.asset )

const asset = Asset.findById(req.body.asset);
if(!asset){
    return next(new ErrorResponse(`No asset with the id ${req.body.asset}`, 404))
}
const review = await Review.create(req.body);


res.status(201).json({
    success: true,
    data: review
})
})

//@desc Update Review
//@route GET /api/v1/reviews/:id
//@access Public 
export const updateReview = asyncHandler(async (req, res, next ) => {

 let review = await Review.findById(req.params.id);
 if(!review){
     return next(new ErrorResponse(`No review with the id of ${req.params.id}`, 404))
 }
//Make sure review belongs to user or user is admin 
if(review.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(`Not auhtorized to update ${req.params.id}`, 404)
}
review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
res.status(200).json({
  success: true,
  data: review  
})

})

//@desc Delete Review 
//@route GET /api/v1/reviews/:id 
//@access Public 
export const deleteReview = asyncHandler(async (req, res, next ) => {
    const review = await Review.findById(req.params.id);
    if(!review){
        return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
    }
    // Make sure user is share owner 
    if(review.user.toString() !== req.user.id && req.user.role !== 'admin'){
        return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this review.`, 404))
    }
    await review.remove();
    res.status(200).json({ success: true, data: {} })
})