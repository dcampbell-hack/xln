import { Response, NextFunction } from 'express';
import { IConditional } from '../type/model.ts';
import { Schema } from 'mongoose';
import Conditional from '../model/Conditional.ts';
import Asset from '../model/Asset.ts';
import ErrorResponse from '../utils/errorResponse.ts';

export const checkIfAssetExist = async (res: Response, next: NextFunction, assetId: typeof Schema.Types.ObjectId ) => {
    const asset = await Asset.findById(assetId);
    if (!asset) {
      return res.status(500).json({
        status: false,
        error: "Chat does not have an associated Asset",
      });
    }
   next()
}

export const checkConditionals = async (next: NextFunction, assetId: typeof Schema.Types.ObjectId ) => {
    
const conditional: IConditional | null = await Conditional.findOne({ where: { asset: assetId } });

if(!conditional){
    return next(new ErrorResponse(`Conditional not found ${assetId}.`, 404))
}

if(conditional.active){
    return next(new ErrorResponse(`Asset is not active ${assetId}.`, 500))
}

}


export const preventPublicKnowledge = async (next: NextFunction, assetId: typeof Schema.Types.ObjectId ) => {

const conditional = await Conditional.findOne({ where: { asset: assetId } });

 if(conditional.private){
     return next(new ErrorResponse(`Asset ${assetId} is set to private. Can be sold but not made public.`, 500))
 }

}

export const preventSale = async (next: NextFunction, assetId: typeof Schema.Types.ObjectId) => {

    const conditional = await Conditional.findOne({ where: { asset: assetId }  });

    if(conditional.shares_reached_max_capacity){
        return next(new ErrorResponse(`Asset ${assetId} stock has reach max capacity. Shares are only available from resell.`, 500))
    }

   }