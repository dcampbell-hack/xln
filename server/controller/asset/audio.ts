import express, { Request, Response, NextFunction } from 'express';
import { AdvanceResults } from '../../type/definition.ts';
import { IUserAuthRequest } from '../../type/definition.ts';

// Utils
import ErrorResponse from '../../utils/errorResponse.js';

// Model
import Asset from '../../model/Asset.js';
import Audio from '../../model/asset/Audio.js';

// Middleware
import asyncHandler from '../../middleware/async.ts';
import { checkConditionals, preventPublicKnowledge, preventSale } from '../../middleware/checkIfValidAsset.js';

//@desc Get Audio
//@route GET /api/v1/audios/:id
//@access Public 
export const getAudio = asyncHandler(async (req: Request, res: Response, next: NextFunction ) => {

const audio = await Audio.findById(req.params.id)
                           .populate({ path: 'asset', select: 'name description'})

if(!audio){
    return next(new ErrorResponse(`No audio with the id of ${req.params.id}`, 404))
}

//Check conditional
checkConditionals(next, audio.asset )

res.status(200).json({
    succes: true,
    data: audio
});

})

//@desc Get Audios 
//@route GET /api/v1/audios       
//@access Public 
export const getAudios = asyncHandler(async (req: Request, res: AdvanceResults, next: NextFunction) => {
    if(req.params.assetId){
    //    await preventPublicKnowledge(next, req.params.assetId )
        const audios = await Audio.find({ asset: req.params.assetId });
        return res.status(200).json({
            success: true,
            count: audios.length,
            data: audios
        })
      } else {
          res.status(200).json(res.advancedResults)
      }
})

//@desc Add Audio
//@route POST /api/v1/:assetId/audios 
//@access Public 
export const createAudio = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
req.body.asset = req.params.assetId;
req.body.user = req.user.id

//Check conditional
// checkConditionals(next, req.body.asset )

const asset = Asset.findById(req.body.asset);
if(!asset){
    return next(new ErrorResponse(`No asset with the id ${req.body.asset}`, 404))
}
const audio = await Audio.create(req.body);


res.status(201).json({
    success: true,
    data: audio
})
})

//@desc Update Audio
//@route GET /api/v1/audios/:id
//@access Public 
export const updateAudio = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {

 let audio = await Audio.findById(req.params.id);
 if(!audio){
     return next(new ErrorResponse(`No audio with the id of ${req.params.id}`, 404))
 }
//Make sure audio belongs to user or user is admin 
if(audio.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(`Not auhtorized to update ${req.params.id}`)
}
audio = await Audio.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
res.status(200).json({
  success: true,
  data: audio  
})

})

//@desc Delete Audio 
//@route GET /api/v1/audios/:id 
//@access Public 
export const deleteAudio = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
    const audio = await Audio.findById(req.params.id);
    if(!audio){
        return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
    }
    // Make sure user is share owner 
    if(audio.user.toString() !== req.user.id && req.user.role !== 'admin'){
        return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this audio.`, 404))
    }
    await audio.remove();
    res.status(200).json({ success: true, data: {} })
})