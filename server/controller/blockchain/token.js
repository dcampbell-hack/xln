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


//export const mint  = async ( address, amount ) => {

//res.send('Mint')
  // const web3 = new Web3(eth_id)
  // const networkId = await web3.eth.net.getId();
  // XLNToken.networks = [networkId];
  // const xlnToken = new web3.eth.Contract(
  //   XLNToken.abi,
  //   XLNToken?.networks[networkId]
  // );


  // const tx = xlnToken.methods.mint(address, amount );

  // const gas = await tx.estimateGas({ from: address });
  // const gasPrice = await web3.eth.getGasPrice();
  // const data = await tx.encodeABI();
  // const nonce = await web3.eth.getTransactionCount(address);

  // const signedTx = await web3.eth.accounts.signTransaction({
  //   to: xlnToken.options.address,
  //   data,
  //   gas,
  //   value: 100 *  10 ** 18,
  //   gasPrice,
  //   chainId: networkId
  // },
  // keyData
  // );

  // console.log(` Old data value: ${ await xlnToken.methods.data().call() }`);
  // const receipt = await web3.ethers.sendTransaction(signedTx.rawTransaction);
  // console.log(`Transaction hash: ${receipt.transactionHash}`)
  // console.log(` New data value: ${ await xlnToken.methods.data().call() }`);

//}

// const updateAdmin  = async ( address ) => {

//   res.send('Update Admin')
//   // const web3 = new Web3(eth_id)
//   // const networkId = await web3.eth.net.getId();
//   // XLNToken.networks = [networkId];
//   // const xlnToken = new web3.eth.Contract(
//   //   XLNToken.abi,
//   //   XLNToken?.networks[networkId]
//   // );


//   // const tx = xlnToken.methods.updateAdmin( address );

//   // const gas = await tx.estimateGas({ from: address });
//   // const gasPrice = await web3.eth.getGasPrice();
//   // const data = await tx.encodeABI();
//   // const nonce = await web3.eth.getTransactionCount(address);

//   // const signedTx = await web3.eth.accounts.signTransaction({
//   //   to: xlnToken.options.address,
//   //   data,
//   //   gas,
//   //   value: 100 *  10 ** 18,
//   //   gasPrice,
//   //   chainId: networkId
//   // },
//   // keyData
//   // );

//   // console.log(` Old data value: ${ await xlnToken.methods.data().call() }`);
//   // const receipt = await web3.ethers.sendTransaction(signedTx.rawTransaction);
//   // console.log(`Transaction hash: ${receipt.transactionHash}`)
//   // console.log(` New data value: ${ await xlnToken.methods.data().call() }`);

// }




//@desc UpdateAdmin
//@route GET /api/v1/ico/start 
//@access Public 
export const updateAdmin = asyncHandler(async (req, res, next ) => {

    const tokenUpdateAdmin = await updateAdmin('0xf62b5824d151094359C831A6195112e355D5dC61')
  
  
      res.status(200).json({ success: true, data: { tokenUpdateAdmin, tokenAddress, name: tokenName, symbol: tokenSymbol, supply: tokenSupply.value  } })
});



//@desc Mint New Tokens
//@route GET /api/v1/ico/withdrawTokens 
//@access Public 
export const mint = asyncHandler(async (req, res, next ) => {

  mint("0xf62b5824d151094359C831A6195112e355D5dC61", 100);

// const Token = await hre.ethers.getContractFactory('XLNToken');
// const token = await Token.deploy('Medallion XLN', '$XLN',   ethers.BigNumber.from(5444444671) );
// await token.deployed();

//   const tokenAddress = token.address;
//   const tokenSupply = await token.totalSupply();
//   const tokenName = await token.name();
//   const tokenSymbol = await token.symbol()
// const tokenMint = await token.mint('0xf62b5824d151094359C831A6195112e355D5dC61', 100 )


//     res.status(200).json({ success: true, data: { tokenAddress, name: tokenName, symbol: tokenSymbol, supply: tokenSupply.value, tokenMint   } })
});



