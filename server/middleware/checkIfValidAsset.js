import Conditional from '../model/Conditional.js';
import ErrorResponse from '../utils/errorResponse.js';

export const checkConditionals = async (next, assetId) => {
    
const conditional = await Conditional.findOne({ asset: assetId });

if(!conditional){
    return next(new ErrorResponse(`Conditional not found ${assetId}.`, 404))
}

if(conditional.active){
    return next(new ErrorResponse(`Asset is not active ${assetId}.`, 500))
}

}


export const preventPublicKnowledge = async (next, assetId) => {

const conditional = await Conditional.findOne({ asset: assetId });

 if(conditional.private){
     return next(new ErrorResponse(`Asset ${assetId} is set to private. Can be sold but not made public.`, 500))
 }

}

export const preventSale = async (next, assetId) => {

    const conditional = await Conditional.findOne({ asset: assetId });

    if(conditional.shares_reached_max_capacity){
        return next(new ErrorResponse(`Asset ${assetId} stock has reach max capacity. Shares are only available from resell.`, 500))
    }

   }