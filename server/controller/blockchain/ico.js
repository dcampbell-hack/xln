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

const axios = require('axios');
const hre = require('hardhat');
const web3 = require('web3');
const BigNumber = require('bignumber');

const XLNToken = require('../../../artifacts/contracts/XLN_Token.sol/XLNToken.json');
const XLNICO = require('../../../artifacts/contracts/XLN_ICO.sol/XLNICO.json');

// Middleware
const asyncHandler = require('../../middleware/async');
const { checkConditionals, preventPublicKnowledge  } = require('../../middleware/checkIfValidAsset');


const startICO  = async ( address ) => {

    const web3 = new Web3(eth_id)
    const networkId = await web3.eth.net.getId();
    XLNICO.networks = [networkId];
    const xlnICO = new web3.eth.Contract(
      XLNICO.abi,
      XLNICO?.networks[networkId]
    );
  
    console.log('ICO start ---', xlnICO )
  
    const tx = xlnICO.methods.start( );
  
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
  

//@desc Start ICO
//@route GET /api/v1/ico/start 
//@access Public 
exports.start = asyncHandler(async (req, res, next ) => {

    // const ICO = await hre.ethers.getContractFactory('XLNICO');
    // const ico = await ICO.deploy(     
    //     token.address,
    //     592200, // duration (592200s = 1 week)
    //     web3.utils.toWei('2', 'milli'), // price of 1 token in DAI (wei) (= 0.002 DAI. 0.002 * 10M = 20,000 DAI ~= 20,000 USD)
    //     token.totalSupply, //_availableTokens for the ICO. can be less than maxTotalSupply
    //     200, //_minPurchase (in DAI)
    //     5000 //_maxPurchase (in DAI));
    // );
    // await ico.deployed();
    // const icoAddress = ico.address;

    const start = await startICO()

    // const Token = await hre.ethers.getContractFactory('XLNToken');
    // const token = await Token.deploy('Medallion XLN', '$XLN', ethers.BigNumber.from("5444444671") );
    // console.log('XLNToken 1 --- ', token)
    // await token.deployed();
    // const tokenAddress = token.address;

    // const ICO = await hre.ethers.getContractFactory('XLNICO');
    // const ico = await ICO.deploy(
    //   token.address,
    //   592200, // duration (592200s = 1 week)
    //   web3.utils.toWei('2', 'milli'), // price of 1 token in DAI (wei) (= 0.002 DAI. 0.002 * 10M = 20,000 DAI ~= 20,000 USD)
    //   token.totalSupply, //_availableTokens for the ICO. can be less than maxTotalSupply
    //   200, //_minPurchase (in DAI)
    //   5000 //_maxPurchase (in DAI));
    // );
    // await ico.deployed();
    // const icoAddress = ico.address;

     res.status(200).json({ success: true, data: {  start } })
});


//@desc Buy XLN tokens
//@route GET /api/v1/ico/buyXLN
//@access Public 
exports.buyXLN = asyncHandler(async (req, res, next ) => {

    const Token = await hre.ethers.getContractFactory('XLNToken');
      const input = 544444671;
      const decimals = 18;
    const token = await Token.deploy('Medallion XLN', '$XLN',   ethers.BigNumber.from(5444444671) );
    await token.deployed();
    const tokenAddress = token.address;
    const tokenSupply = token.totalSupply;


    console.log('Token props', token, tokenAddress, tokenSupply)

    const ICO = await hre.ethers.getContractFactory('XLNICO');
    const ico = await ICO.deploy(     
        token.address,
        592200, // duration (592200s = 1 week)
        web3.utils.toWei('2', 'milli'), // price of 1 token in DAI (wei) (= 0.002 DAI. 0.002 * 10M = 20,000 DAI ~= 20,000 USD)
        token.totalSupply, //_availableTokens for the ICO. can be less than maxTotalSupply
        200, //_minPurchase (in DAI)
        5000 //_maxPurchase (in DAI));
    );
    await ico.deployed();
    const icoAddress = ico.address;

    console.log('XLN ICO ----- ', icoAddress,  tokenAddress )
    res.status(200).json({ success: true, token: tokenAddress, ico: icoAddress})
})


//@desc Withdraw Tokens
//@route GET /api/v1/ico/withdrawTokens 
//@access Public 
exports.withdrawTokens = asyncHandler(async (req, res, next ) => {
    res.status(200).json({ success: true, data: "Withdraw Token!" })
});


//@desc Withdraw Dai
//@route GET /api/v1/ico/withdrawDai
//@access Public 
exports.withdrawDai = asyncHandler(async (req, res, next ) => {
    res.status(200).json({ success: true, data: "Withdraw Dai!" })
});




