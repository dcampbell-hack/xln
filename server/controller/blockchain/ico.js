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


//@desc Start ICO
//@route GET /api/v1/ico/start 
//@access Public 
export const start = asyncHandler(async (req, res, next ) => {

  try{
 //Token
 const xlnToken = await hre.ethers.getContractFactory('XLNToken')
 const totalSupply =  5444444671; //5.4B

 const token = await xlnToken.deploy(
   'Medallion XLN', //name
   '$XLN', //sticker
   totalSupply
 )

  await token.deployed()
 //ICO
 const xlnICO = await hre.ethers.getContractFactory('XLNICO')
 const ico = await xlnICO.deploy(
     token.address,
     300, // duration (592200s = 1 week)
     web3.utils.toWei('2', 'milli'), // price of 1 token in DAI (wei) (= 0.002 DAI. 0.002 * 10M = 20,000 DAI ~= 20,000 USD)
     totalSupply, //_availableTokens for the ICO. can be less than maxTotalSupply
     200, //_minPurchase (in DAI)
     5000 //_maxPurchase (in DAI)
 );

  await ico.deployed();
 await token.updateAdmin(ico.address);
 await ico.start();

     res.status(200).json({ success: true, data: {  ico, token } })
 } catch(err){
  res.status(500).json({ success: false, data: { err: ` ${err} ` }})
 }

    });


//@desc Buy XLN tokens
//@route GET /api/v1/ico/buyXLN
//@access Public 
export const buyXLN = asyncHandler(async (req, res, next ) => {

  res.send('Buy XLN Tokens')
 
//   try{
//   const web3 = new Web3(eth_id)
//   const networkId = await web3.eth.net.getId();
//   XLNICO.networks = [networkId];
//   XLNICO.address = icoAddress;

//   const xlnICO = new web3.eth.Contract(
//     XLNICO.abi,
//     icoAddress
//   );

//   const tx = xlnICO.methods.buy( 20 );

// const availableTokens = await xlnICO.methods.availableTokens(); 
// console.log('Available Tokens -------', availableTokens )
//   const gas = await tx.estimateGas({ from: address });
//   const gasPrice = await web3.eth.getGasPrice();
//   const data = await tx.encodeABI();
//   const nonce = await web3.eth.getTransactionCount(address);

//   const signedTx = await web3.eth.accounts.signTransaction({
//     to: xlnICO.options.address,
//     data,
//     gas,
//     value: 100 *  10 ** 18,
//     gasPrice,
//     chainId: networkId
//   },
//   keyData
//   );

//   const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
//   console.log(`Transaction hash: ${receipt.transactionHash}`)
//   // console.log(` New data value: ${ await xlnICO.methods.data().call() }`);

//     res.status(200).json({ success: true, ico: { ico: xlnICO, null: { /* receipt */ } } })
//   } catch(err){
//     res.status(500).json({ success: false, error: `${err}` })
//   }

  })


//@desc Withdraw Tokens
//@route GET /api/v1/ico/withdrawTokens 
//@access Public 
export const withdrawTokens = asyncHandler(async (req, res, next ) => {
    res.status(200).json({ success: true, data: "Withdraw Token!" })
});


//@desc Withdraw Dai
//@route GET /api/v1/ico/withdrawDai
//@access Public 
export const withdrawDai = asyncHandler(async (req, res, next ) => {
    res.status(200).json({ success: true, data: "Withdraw Dai!" })
});




