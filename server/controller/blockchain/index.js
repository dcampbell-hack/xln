//Utils
import ErrorResponse from '../../utils/errorResponse.js';

//Models
import Asset from '../../model/Asset.js';
import Share from '../../model/asset/Share.js';
import Review from '../../model/asset/Review.js';
import Offer from '../../model/asset/Offer.js';
import User from '../../model/User.js';
import Comment from '../../model/asset/Comment.js';

import { ethers, providers } from 'ethers';
import web3 from 'web3';
import Web3 from 'web3';
import axios from 'axios';
import hre from 'hardhat';

//import XLNICO from '../../../artifacts/contracts/XLN_ICO.sol/XLNICO.json');

import { tokenAddress, icoAddress } from '../../config/config.js'

// Middleware
import asyncHandler from '../../middleware/async.js';
import { checkConditionals, preventPublicKnowledge  } from '../../middleware/checkIfValidAsset.js';

const keyData = "880cc13f65a639ab6ddd37afbfa9b008bc5045fccc2da1b715b67f7c8317fdec"
const address = '0xf62b5824d151094359C831A6195112e355D5dC61';
const eth_id = 'https://kovan.infura.io/v3/68eb211506c141e78162043b7b0df69a';


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
            marketAddress  
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

