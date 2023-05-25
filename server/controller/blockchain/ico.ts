//Utils
import ErrorResponse from '../../utils/errorResponse.ts';

//Models
import Asset from '../../model/Asset.ts';
import Share from '../../model/asset/Share.ts';
import Review from '../../model/asset/Review.ts';
import Offer from '../../model/asset/Offer.ts';
import User from '../../model/User.ts';
import Comment from '../../model/asset/Comment.ts';

import { ethers, providers } from 'ethers';
import web3 from 'web3';
import Web3 from 'web3';
import axios from 'axios';
import hre from 'hardhat';

//import XLNICO from '../../../artifacts/contracts/XLN_ICO.sol/XLNICO.json');

import { tokenAddress, icoAddress } from '../../config/config.js'

// Middleware
import asyncHandler from '../../middleware/async.ts';
import { checkConditionals, preventPublicKnowledge  } from '../../middleware/checkIfValidAsset.ts';

const keyData = "880cc13f65a639ab6ddd37afbfa9b008bc5045fccc2da1b715b67f7c8317fdec"
const address = '0xf62b5824d151094359C831A6195112e355D5dC61';
const eth_id = 'https://kovan.infura.io/v3/68eb211506c141e78162043b7b0df69a';

//@desc Buy XLN tokens
//@route GET /api/v1/ico/buyXLN
//@access Public 
export const buyXLN = asyncHandler(async (req, res, next ) => {

  res.send('Buy XLN Tokens')

  })






