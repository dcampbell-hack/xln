import express, { Request, Response, NextFunction } from 'express';
import { AdvanceResults, IUserAuthRequest } from '../../type/definition.ts';
// Utils
import ErrorResponse from '../../utils/errorResponse.js';
import advancedResults from '../../middleware/advancedResults.js';

// Model
import Asset from '../../model/Asset.js';
import User from '../../model/User.js';
import Share from '../../model/asset/Share.js';

// Middleware
import asyncHandler from '../../middleware/async.ts';
import { getLocationFromIpAddress } from '../../middleware/ipAddress.js';
import { shareholderValidation } from '../../middleware/shareholderValidation.js';
import { checkConditionals, preventPublicKnowledge, preventSale } from '../../middleware/checkIfValidAsset.js'

//@desc Get Shares
//@route GET /api/v1/assets/:assetId/shares/:shareId
//@access Public 
export const getShare = asyncHandler(async (req: Request, res: AdvanceResults, next: NextFunction) => {

    if(req.params.id){
        const share = await Share.findById(req.params.id).populate({
            path: 'asset',
            select: 'name description'
        })

        if(!share){
            return next(
                new ErrorResponse(`No share with the id of ${req.params.id}`, 404)
            )
        }

        return res.status(200).json({
            success: true,
            count: share.length,
            data: share
        })
    } else {
        res.status(200).json(res.advancedResults)
    }
})

//@desc Get Shares 
//@route GET /api/v1/assets/:assetId/shares      
//@access Public 
export const getShares = asyncHandler(async (req: Request, res: AdvanceResults, next: NextFunction) => {

// Check conditionals
// await checkConditionals(next, req.params.assetId)

if(req.params.assetId){


//  await preventPublicKnowledge(next, req.params.assetId)

const share = await Share.find({ asset: req.params.assetId });

return res.status(200).json({
    success: true,
    count: share.length,
    data: share
})

} else {
    res.status(200).json(res.advancedResults);
}

})

//@desc Add Share 
//@route GET /api/v1/share 
//@access Public 
export const addShare = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
req.body.user = req.user.id;

const user = await User.findById(req.body.user);
if(!user){
    return next(new ErrorResponse(`User does not exist..`, 404))  
}

// Check conditionals
// await checkConditionals(next, req.body.asset)
// await preventSale(next, req.body.asset)

const asset = await Asset.findById(req.body.asset);
if(!asset){
    return next(new ErrorResponse(`No asset found - ${req.body.asset}.`, 404))  
}

const _assets = await Asset.find()
const shares = await Share.find({ asset: req.params.assetId });

const minCost = asset.fee + asset.price;
const price = req.body.resell;


if(!asset){
    return next(new ErrorResponse(`No asset with the id of ${req.params.assetId}.`, 404 ));
}

//Make sure user is share holder
if(req.user.role === 'system'){
    return next(new ErrorResponse(`System users are not allowed to buy or sell shares`, 404))
}

if(price ){
    return next(new ErrorResponse(`Price must be included`, 500))
}

if(price < minCost ){
    return next(new ErrorResponse(`Price is too low. Must equal ${minCost} or above.`, 500))
}


if(req.body.user === asset.user){
    return next(new ErrorResponse(`User cannot send money to yourself`, 500))
}

const shareNumber = Date.now();
const shareObj = {
    shareNumber,
    name: asset.slug,
    description: asset.description,
    price: price,
    minCost,
    user: req.body.user,
    to_user: asset.user,
    asset: asset._id
}

// const shareholderObj = {
//     userId: req.user._id,   
//     assetId: asset._id,
//     assetsOwned: req.user.assetsOwned, 
//     sharesOwned: req.user.sharesOwned, 
//     sharesCreated: asset.flow ? asset.flow : 0 , 
//     assetStock: asset.stock,
//     marketcap: asset.marketcap,
//     assets: _assets
// }

//await shareholderValidation(shareholderObj);

await Share.create(shareObj);
res.status(200).json({ success: true, data: shareObj })

})

//@desc Update Share 
//@route PUT /api/v1/share/:id
//@access Public 
export const updateShare = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
   let share = await Share.findById(req.params.id);
   if(!share){
       return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
   }

   //Make sucess user is share owner 
   if(share.user === req.user.id){
       return next(new ErrorResponse(`You already own this share`, 500))
   }



   share = await Share.findByIdAndUpdate( req.params.id, req.body, {
           new: true, 
           runValidators: true
       }
   );

   res.status(200).json({ success: true, data: share})
})

//@desc Delete Share 
//@route GET /api/v1/share/:id
//@access Public 
export const deleteShare = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
const share = await Share.findById(req.params.id);
if(!share){
    return next(new ErrorResponse(`No share with the id of ${req.params.id}`, 404))
}
// Make sure user is share owner 
if(share.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to add a share to this asset`, 404))
}
await share.remove();
res.status(200).json({ success: true, data: {} })

})

