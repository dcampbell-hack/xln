import express, { Request, Response, NextFunction } from 'express';
import { AdvanceResults, IUserAuthRequest } from '../../type/definition.ts';

// Utils
import ErrorResponse from '../../utils/errorResponse.js';

// Model
import Asset from '../../model/Asset.js';
import Link from '../../model/asset/Link.js';

// Middleware
import asyncHandler from '../../middleware/async.ts';
import { checkConditionals, preventPublicKnowledge, preventSale } from '../../middleware/checkIfValidAsset.js'

//@desc Get Link
//@route GET /api/v1/reviews/:id
//@access Public 
export const getLink = asyncHandler(async (req: Request, res: AdvanceResults, next: NextFunction) => {

const link = await Link.findById(req.params.id)
                           .populate({ path: 'asset', select: 'name description'})

if(!link){
    return next(new ErrorResponse(`No link with the id of ${req.params.id}`, 404))
}

//Check conditional
checkConditionals(next, link.asset )

res.status(200).json({
    succes: true,
    data: link
});

})

//@desc Get Links 
//@route GET /api/v1/links       
//@access Public 
export const getLinks = asyncHandler(async (req: Request, res: AdvanceResults, next: NextFunction) => {
    if(req.params.assetId){
    //    await preventPublicKnowledge(next, req.params.assetId )
        const links = await Link.find({ asset: req.params.assetId });
        return res.status(200).json({
            success: true,
            count: links.length,
            data: links
        })
      } else {
          res.status(200).json(res.advancedResults)
      }
})

//@desc Create Link
//@route POST /api/v1/:assetId/reviews 
//@access Public 
export const createLink = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
req.body.asset = req.params.assetId;
req.body.user = req.user.id

//Check conditional
// checkConditionals(next, req.body.asset )

const asset = Asset.findById(req.body.asset);
if(!asset){
    return next(new ErrorResponse(`No asset with the id ${req.body.asset}`, 404))
}
const link = await Link.create(req.body);


res.status(201).json({
    success: true,
    data: link
})
})

//@desc Update Link
//@route GET /api/v1/links/:id
//@access Public 
export const updateLink = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {

 let link = await Link.findById(req.params.id);
 if(!link){
     return next(new ErrorResponse(`No link with the id of ${req.params.id}`, 404))
 }
//Make sure link belongs to user or user is admin 
if(link.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(`Not auhtorized to update ${req.params.id}`)
}
link = await Link.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
res.status(200).json({
  success: true,
  data: link  
})

})

//@desc Delete Link
//@route GET /api/v1/links/:id 
//@access Public 
export const deleteLink= asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
    const link = await Link.findById(req.params.id);
    if(!link){
        return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
    }
    // Make sure user is share owner 
    if(link.user.toString() !== req.user.id && req.user.role !== 'admin'){
        return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this link.`, 404))
    }
    await link.remove();
    res.status(200).json({ success: true, data: {} })
})