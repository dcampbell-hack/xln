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

//@desc MintNFT
//@route GET /api/v1/ico/withdrawTokens 
//@access Public 
export const mintNFT = asyncHandler(async (req, res, next ) => {

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







