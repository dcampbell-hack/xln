import express, { Request, Response, NextFunction } from 'express';
import { AdvanceResults, IUserAuthRequest} from '../../type/definition.ts'

//Utils
import ErrorResponse from '../../utils/errorResponse.js';

//Models
import Asset from '../../model/Asset.js';
import Share from '../../model/asset/Share.js';
import Review from '../../model/asset/Review.js';
import Offer from '../../model/asset/Offer.js';
import User from '../../model/User.js';
import Comment from '../../model/asset/Comment.js';

// Middleware
import asyncHandler from '../../middleware/async.ts';
import { checkConditionals, preventPublicKnowledge  } from '../../middleware/checkIfValidAsset.js'



//@desc Get Shares
//@route GET /api/v1/assets/:assetId/shares/:shareId
//@access Public 
export const getComment = asyncHandler(async (req: Request, res: AdvanceResults, next: NextFunction) => {

    if(req.params.id){
        const comment = await Comment.findById(req.params.id).populate({
            path: 'asset',
            select: 'name description'
        })

        if(!comment){
            return next(
                new ErrorResponse(`No share with the id of ${req.params.id}`, 404)
            )
        }

        return res.status(200).json({
            success: true,
            count: comment.length,
            data: comment
        })
    } else {
        res.status(200).json(res.advancedResults)
    }
})

//@desc Get Shares 
//@route GET /api/v1/assets/:assetId/shares      
//@access Public 
export const getComments = asyncHandler(async (req: Request, res: AdvanceResults, next: NextFunction) => {

if(req.params.assetId){

//  await preventPublicKnowledge(next, req.params.assetId )

const comment = await Comment.find({ asset: req.params.assetId });

return res.status(200).json({
    success: true,
    count: comment.length,
    data: comment
})

} else {
    res.status(200).json(res.advancedResults);
}

})

//@desc Add Comment
//@route GET /api/v1/share 
//@access Public 
export const addComment = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

req.body.asset = req.params.assetId 
req.body.share = req.params.shareId
req.body.review = req.params.reviewId 
req.body.offer = req.params.offerId 
req.body.user = req.params.userId 

async function addNewComment(url, Model){

const model = await Model.findById(url)
if(!model) return next(new ErrorResponse(`No asset with the id of ${url}`, 404 ));

const comment = await Comment.create(req.body);
res.status(200).json({ success: true, data: comment });

}

//Check conditionals
if(req.body.asset){
    await checkConditionals(next, req.body.asset);
    await addNewComment(req.body.asset, Asset)
}

// Add a comment for a Share
if(req.body.share){
   await addNewComment(req.body.share, Share)
}

// Add a comment for a Review
if(req.body.review){
    await addNewComment(req.body.review, Review)
 }

 // Add a comment for a Offer
 if(req.body.offer){
    await addNewComment(req.body.offer, Offer)
 }

 // Add a comment for a User
 if(req.body.user){
    await addNewComment(req.body.user, User)
 }


})

//@desc Update comment
//@route PUT /api/v1/comment/:id
//@access Public 
export const updateComment = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
   let comment = await Comment.findById(req.params.id);
   
   if(!comment){
       return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
   }

   comment = await Comment.findByIdAndUpdate( req.params.id, req.body, {
           new: true, 
           runValidators: true
       }
   );

   res.status(200).json({ success: true, data: comment })

})

//@desc Delete Share 
//@route GET /api/v1/share 
//@access Public 
export const deleteComment = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
const comment = await Comment.findById(req.params.id);

if(!comment){
    return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
}
// Make sure user is share owner 
if(comment.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this comment.`, 404))
}
await comment.remove();
res.status(200).json({ success: true, data: {} })

})