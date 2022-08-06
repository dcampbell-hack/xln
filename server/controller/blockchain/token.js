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
const Web3 = require('web3');
const axios = require('axios');
const hre = require('hardhat');

const keyData = "880cc13f65a639ab6ddd37afbfa9b008bc5045fccc2da1b715b67f7c8317fdec"
const address = '0xf62b5824d151094359C831A6195112e355D5dC61';
const eth_id = 'https://kovan.infura.io/v3/68eb211506c141e78162043b7b0df69a';

const XLNToken = require('../../../artifacts/contracts/XLN_Token.sol/XLNToken.json');
const XLNICO = require('../../../artifacts/contracts/XLN_ICO.sol/XLNICO.json');


// Middleware
const asyncHandler = require('../../middleware/async');
const { checkConditionals, preventPublicKnowledge  } = require('../../middleware/checkIfValidAsset');


const mint  = async ( address, amount ) => {
  const web3 = new Web3(eth_id)
  const networkId = await web3.eth.net.getId();
  XLNToken.networks = [networkId];
  const xlnToken = new web3.eth.Contract(
    XLNToken.abi,
    XLNToken?.networks[networkId]
  );


  const tx = xlnToken.methods.mint(address, amount );

  const gas = await tx.estimateGas({ from: address });
  const gasPrice = await web3.eth.getGasPrice();
  const data = await tx.encodeABI();
  const nonce = await web3.eth.getTransactionCount(address);

  const signedTx = await web3.eth.accounts.signTransaction({
    to: xlnToken.options.address,
    data,
    gas,
    value: 100 *  10 ** 18,
    gasPrice,
    chainId: networkId
  },
  keyData
  );

  console.log(` Old data value: ${ await xlnToken.methods.data().call() }`);
  const receipt = await web3.ethers.sendTransaction(signedTx.rawTransaction);
  console.log(`Transaction hash: ${receipt.transactionHash}`)
  console.log(` New data value: ${ await xlnToken.methods.data().call() }`);

}

const updateAdmin  = async ( address ) => {
  const web3 = new Web3(eth_id)
  const networkId = await web3.eth.net.getId();
  XLNToken.networks = [networkId];
  const xlnToken = new web3.eth.Contract(
    XLNToken.abi,
    XLNToken?.networks[networkId]
  );


  const tx = xlnToken.methods.updateAdmin( address );

  const gas = await tx.estimateGas({ from: address });
  const gasPrice = await web3.eth.getGasPrice();
  const data = await tx.encodeABI();
  const nonce = await web3.eth.getTransactionCount(address);

  const signedTx = await web3.eth.accounts.signTransaction({
    to: xlnToken.options.address,
    data,
    gas,
    value: 100 *  10 ** 18,
    gasPrice,
    chainId: networkId
  },
  keyData
  );

  console.log(` Old data value: ${ await xlnToken.methods.data().call() }`);
  const receipt = await web3.ethers.sendTransaction(signedTx.rawTransaction);
  console.log(`Transaction hash: ${receipt.transactionHash}`)
  console.log(` New data value: ${ await xlnToken.methods.data().call() }`);

}




//@desc UpdateAdmin
//@route GET /api/v1/ico/start 
//@access Public 
exports.updateAdmin = asyncHandler(async (req, res, next ) => {

    const tokenUpdateAdmin = await updateAdmin('0xf62b5824d151094359C831A6195112e355D5dC61')
  
  
      res.status(200).json({ success: true, data: { tokenUpdateAdmin, tokenAddress, name: tokenName, symbol: tokenSymbol, supply: tokenSupply.value  } })
});



//@desc Mint New Tokens
//@route GET /api/v1/ico/withdrawTokens 
//@access Public 
exports.mint = asyncHandler(async (req, res, next ) => {

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



