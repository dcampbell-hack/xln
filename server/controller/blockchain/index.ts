//Utils
import ErrorResponse from '../../utils/errorResponse.ts';

//Models
import Asset from '../../model/Asset.ts';
import Share from '../../model/asset/Share.ts';
import Review from '../../model/asset/Review.ts';
import Offer from '../../model/asset/Offer.ts';
import User from '../../model/User.ts';
import Comment from '../../model/asset/Comment.ts';

import { tokenPrice, deployerAddress, nftAddress, nftMarketAddress, tokenAddress, icoAddress } from '../../config/config.js'

// Middleware
import asyncHandler from '../../middleware/async.ts';
import { checkConditionals, preventPublicKnowledge  } from '../../middleware/checkIfValidAsset.ts';




//@desc Get Contract Address
//@route GET /api/v1/blockchain/get-contract-address 
//@access Public 
export const getContractAddress = asyncHandler(async (req, res, next ) => {

    res.status(200)
       .json({ 
        success: true, 
        data: { 
            message: "Get Contract Address!", 
            tokenPrice,
            deployerAddress,
            tokenAddress, 
            icoAddress, 
            nftAddress, 
            nftMarketAddress  
        } 
    })
});



//@desc Update User Address
//@route GET /api/v1/blockchain/get-contract-address 
//@access Public 
export const updateUserAddress = asyncHandler(async (req, res, next ) => {

    console.log('User Address', req.body.address)

    const user = await User.findById(req.user.id);

    if(!user){
        return res.status(404).json({ success: false, data: { message: "No user found"}})
    }


   const role = await User.findByIdAndUpdate(req.user.id, { address: req.body.address, role: "publisher" }, {
        new: true,
        runValidators: true
    });

    res.status(200)
       .json({ 
        success: true, 
        address: req.body.address 
    })
});

