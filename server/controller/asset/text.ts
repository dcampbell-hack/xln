import express, { Request, Response, NextFunction } from 'express';
import { AdvanceResults } from '../../type/definition.ts';
import { IUserAuthRequest } from '../../type/definition.ts';

// Utils
import ErrorResponse from '../../utils/errorResponse.js';

// Model
import Asset from '../../model/Asset.js';
import Text from '../../model/asset/Text.js';

// Middleware
import asyncHandler from '../../middleware/async.ts';
import { checkConditionals, preventPublicKnowledge, preventSale } from '../../middleware/checkIfValidAsset.js'

//@desc Get Text
//@route GET /api/v1/texts/:id
//@access Public 
export const getText = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

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
export const getTexts = asyncHandler(async (req: Request, res: AdvanceResults, next: NextFunction) => {
    if(req.params.assetId){
    //    await preventPublicKnowledge(next, req.params.assetId )
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
export const createText = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
req.body.asset = req.params.assetId;
req.body.user = req.user.id

//Check conditional
// checkConditionals(next, req.body.asset )

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
export const updateText = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {

 let text = await Text.findById(req.params.id);
 if(!text){
     return next(new ErrorResponse(`No review with the id of ${req.params.id}`, 404))
 }
//Make sure review belongs to user or user is admin 
if(text.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(`Not auhtorized to update ${req.params.id}`)
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
export const deleteText = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
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