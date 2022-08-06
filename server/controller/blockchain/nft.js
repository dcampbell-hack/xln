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

const XLNNFT = require('../../../artifacts/contracts/XLN_NFT.sol/XLNNFT.json');
const XLNMarket = require('../../../artifacts/contracts/XLN_Market.sol/XLNMarket.json');

// Middleware
const asyncHandler = require('../../middleware/async');
const { checkConditionals, preventPublicKnowledge  } = require('../../middleware/checkIfValidAsset');

const mintNFT  = async ( address ) => {

  const web3 = new Web3(eth_id)
  const networkId = await web3.eth.net.getId();
  XLNNFT.networks = [networkId];
  const xlnNFT = new web3.eth.Contract(
    XLNNFT.abi,
    XLNNFT?.networks[networkId]
  );


  const tx = xlnNFT.methods.mintNFT( address );

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


//@desc MintNFT
//@route GET /api/v1/ico/withdrawTokens 
//@access Public 
exports.mintNFT = asyncHandler(async (req, res, next ) => {

  mintNFT()

    // const Market = await hre.ethers.getContractFactory('XLNMarket');
    // const market = await Market.deploy();
    // await market.deployed();
    // const marketAddress = market.address;

    // const NFT = await hre.ethers.getContractFactory('XLNNFT');
    // const nft = await NFT.deploy(marketAddress);
    // await nft.deployed();
    // const nftAddress = nft.address;

    // let listingPrice = await market.getListingPrice();
    //   listingPrice = listingPrice.toString();

    //   const auctionPrice = ethers.utils.parseUnits('100', 'ether');

    //   // test for minting
    //   await nft.mintNFT('https-t1');
    //   await nft.mintNFT('https-t2');

    //   await market.makeMarketItem(nftAddress, 1, auctionPrice, {
    //     value: listingPrice
    //   });

    //   await market.makeMarketItem(nftAddress, 2, auctionPrice, {
    //     value: listingPrice
    //   });

    //   // test for different addresses from different users - test accounts
    //   // return an array of however many addresses

    //   const [_, buyerAddress ] = await hre.ethers.getSigners();
    //   await market.connect(buyerAddress).createMarketSale(nftAddress, 1, {
    //     value: auctionPrice
    //   })

    //   let items = await market.fetchMarketTokens();

    //   items = await Promise.all(items.map(async i => {
    //     const tokenUri = await nft.tokenURI(i.tokenId);
    //     let item = {
    //       price: i.price.toString(),
    //       tokenId: i.tokenId.toString(),
    //       seller: i.seller,
    //       owner: i.owner,
    //       tokenUri
    //     }
    //     return item;
    // }))

    res.status(200).json({ success: true, data: { items, nft, nftAddress, market, marketAddress } })
});







