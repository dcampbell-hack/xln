import express, { Request, Response, NextFunction } from 'express';
import { AdvanceResults } from '../../type/definition.ts';
import { IUserAuthRequest } from '../../type/definition.ts';

// Utils
import ErrorResponse from '../../utils/errorResponse.js';

// Model
import Asset from '../../model/Asset.js';
import Video from '../../model/asset/Video.js';

// Middleware
import asyncHandler from '../../middleware/async.ts';
import { checkConditionals, preventPublicKnowledge, preventSale } from '../../middleware/checkIfValidAsset.js'

//@desc Get Video
//@route GET /api/v1/reviews/:id
//@access Public 
export const getVideo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

const video = await Video.findById(req.params.id)
                           .populate({ path: 'asset', select: 'name description'})

if(!video){
    return next(new ErrorResponse(`No review with the id of ${req.params.id}`, 404))
}

//Check conditional
checkConditionals(next, video.asset )

res.status(200).json({
    succes: true,
    data: video
});

})

//@desc Get Videos
//@route GET /api/v1/videos       
//@access Public 
export const getVideos = asyncHandler(async (req: Request, res: AdvanceResults, next: NextFunction) => {
    if(req.params.assetId){
    //    await preventPublicKnowledge(next, req.params.assetId )
        const videos = await Video.find({ asset: req.params.assetId });
        return res.status(200).json({
            success: true,
            count: videos.length,
            data: videos
        })
      } else {
          res.status(200).json(res.advancedResults)
      }
})

//@desc Add Review
//@route POST /api/v1/:assetId/reviews 
//@access Public 
export const createVideo = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
req.body.asset = req.params.assetId;
req.body.user = req.user.id

//Check conditional
// checkConditionals(next, req.body.asset )

const asset = Asset.findById(req.body.asset);
if(!asset){
    return next(new ErrorResponse(`No asset with the id ${req.body.asset}`, 404))
}
const video = await Video.create(req.body);


res.status(201).json({
    success: true,
    data: video
})
})

//@desc Update Review
//@route GET /api/v1/reviews/:id
//@access Public 
export const updateReview = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {

 let video = await Video.findById(req.params.id);
 if(!video){
     return next(new ErrorResponse(`No video with the id of ${req.params.id}`, 404))
 }
//Make sure video belongs to user or user is admin 
if(video.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(`Not auhtorized to update ${req.params.id}`)
}
video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
res.status(200).json({
  success: true,
  data: video  
})

})

//@desc Delete Video
//@route GET /api/v1/videos/:id 
//@access Public 
export const deleteVideo = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
    const video = await Video.findById(req.params.id);
    if(!video){
        return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
    }
    // Make sure user is share owner 
    if(video.user.toString() !== req.user.id && req.user.role !== 'admin'){
        return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this video.`, 404))
    }
    await video.remove();
    res.status(200).json({ success: true, data: {} })
})