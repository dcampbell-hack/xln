//Utils
const ErrorResponse = require('../../utils/errorResponse');

//Models
const Asset = require('../../model/Asset');
const Share = require('../../model/asset/Share');
const Review = require('../../model/asset/Review');
const Offer = require('../../model/asset/Offer');
const User = require('../../model/User');
const Comment = require('../../model/asset/Comment');

const { ethers, providers } = require('ethers');

const axios = require('axios');
const hre = require('hardhat');
const Web3 = require('web3');

const { nftAddress, nftMarketAddress } = require('../../config/config')


// Middleware
const asyncHandler = require('../../middleware/async');
const { checkConditionals, preventPublicKnowledge  } = require('../../middleware/checkIfValidAsset');

//@desc MintNFT
//@route GET /api/v1/ico/withdrawTokens 
//@access Public 
exports.mintNFT = asyncHandler(async (req, res, next ) => {

    const Market = await hre.ethers.getContractFactory('XLNMarket');
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    const NFT = await hre.ethers.getContractFactory('XLNNFT');
    const nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    const nftAddress = nft.address;

    let listingPrice = await market.getListingPrice();
      listingPrice = listingPrice.toString();

      const auctionPrice = ethers.utils.parseUnits('100', 'ether');

      // test for minting
      await nft.mintNFT('https-t1');
      await nft.mintNFT('https-t2');

      await market.makeMarketItem(nftAddress, 1, auctionPrice, {
        value: listingPrice
      });

      await market.makeMarketItem(nftAddress, 2, auctionPrice, {
        value: listingPrice
      });

    //   // test for different addresses from different users - test accounts
    //   // return an array of however many addresses

      const [_, buyerAddress ] = await hre.ethers.getSigners();
      await market.connect(buyerAddress).createMarketSale(nftAddress, 1, {
        value: auctionPrice
      })

      let items = await market.fetchMarketTokens();

      items = await Promise.all(items.map(async i => {
        const tokenUri = await nft.tokenURI(i.tokenId);
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri
        }
        return item;
    }))

    res.status(200).json({ success: true, data: { items, nft, nftAddress, market, marketAddress } })
});







