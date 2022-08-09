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

// Middleware
const asyncHandler = require('../../middleware/async');
const { checkConditionals, preventPublicKnowledge  } = require('../../middleware/checkIfValidAsset');

//@desc Get Listing Price
//@route GET /api/v1/market/get-listing-price 
//@access Public 
exports.getListingPrice = asyncHandler(async (req, res, next ) => {

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

     res.status(200).json({ success: true, data: { listingPrice}})
});



//@desc Make Market Item
//@route GET /api/v1//market/make-market-item 
//@access Public 
exports.makeMarketItem= asyncHandler(async (req, res, next ) => {

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

      const mint1 = await market.makeMarketItem(nftAddress, 1, auctionPrice, {
        value: listingPrice
      });

      const mint2 = await market.makeMarketItem(nftAddress, 2, auctionPrice, {
        value: listingPrice
      });

     

     res.status(200).json({ success: true, data: { mints: [ mint1, mint2 ]} })
 
});


 //@desc Create Market Sale
//@route GET /api/v1//market/create-market-sale
//@access Public 
exports.createMarketSale = asyncHandler(async (req, res, next ) => {

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

      // test for different addresses from different users - test accounts
      // return an array of however many addresses

      const [_, buyerAddress ] = await hre.ethers.getSigners();
      const marketSale =  await market.connect(buyerAddress).createMarketSale(nftAddress, 1, {
        value: auctionPrice
      })

    res.status(201).json({ success: true, data: { marketSale } })

   // res.status(201).json({ success: true, data: user })    
});



//@desc Fetch Market Tokens
//@route GET /api/v1/market/fetch-market-tokens
//@access Public 
exports.fetchMarketTokens = asyncHandler(async (req, res, next ) => {

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

      // test for different addresses from different users - test accounts
      // return an array of however many addresses

      const [_, buyerAddress ] = await hre.ethers.getSigners();
      await market.connect(buyerAddress).createMarketSale(nftAddress, 1, {
        value: auctionPrice
      })

      let items = await market.fetchMarketTokens();


    res.status(200).json({ success: true, data: { items } })
});

//@desc Fetch My NFTs
//@route GET /api/v1/market/fetch-my-nfts
//@access Public 
exports.fetchMyNFTs = asyncHandler(async (req, res, next ) => {

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

      // test for different addresses from different users - test accounts
      // return an array of however many addresses

      const [_, buyerAddress ] = await hre.ethers.getSigners();
      await market.connect(buyerAddress).createMarketSale(nftAddress, 1, {
        value: auctionPrice
      })

      let nfts = await market.fetchMyNFTs();

    res.status(200).json({ success: true, data: { nfts } })
});

//@desc Fetch Items Created
//@route GET /api/v1//market/fetch-items-created
//@access Public 
exports.fetchItemsCreated= asyncHandler(async (req, res, next ) => {
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

      // test for different addresses from different users - test accounts
      // return an array of however many addresses

      const [_, buyerAddress ] = await hre.ethers.getSigners();
      await market.connect(buyerAddress).createMarketSale(nftAddress, 1, {
        value: auctionPrice
      })

      let items = await market.fetchItemsCreated();

    res.status(200).json({ success: true, data: { items } })
});




