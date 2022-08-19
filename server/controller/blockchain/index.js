//Utils
const ErrorResponse = require('../../utils/errorResponse');

//Models
const Asset = require('../../model/Asset');
const Share = require('../../model/Share');
const Review = require('../../model/Review');
const Offer = require('../../model/Offer');
const User = require('../../model/User');
const Comment = require('../../model/Comment');

const { ethers, providers } = require('ethers');
const web3 = require('web3');
const Web3 = require('web3');
const axios = require('axios');
const hre = require('hardhat');

const keyData = "880cc13f65a639ab6ddd37afbfa9b008bc5045fccc2da1b715b67f7c8317fdec"
const address = '0xf62b5824d151094359C831A6195112e355D5dC61';
const eth_id = 'https://kovan.infura.io/v3/68eb211506c141e78162043b7b0df69a';

//const XLNICO = require('../../../artifacts/contracts/XLN_ICO.sol/XLNICO.json');

const { tokenAddress, icoAddress, nftAddress, marketAddress } = require('../../config/config')

// Middleware
const asyncHandler = require('../../middleware/async');
const { checkConditionals, preventPublicKnowledge  } = require('../../middleware/checkIfValidAsset');




//@desc Get Contract Address
//@route GET /api/v1/blockchain/get-contract-address 
//@access Public 
exports.getContractAddress = asyncHandler(async (req, res, next ) => {
    res.status(200).json({ success: true, data: { message: "Get Contract Address!", tokenAddress, icoAddress, nftAddress, marketAddress  } })
});

