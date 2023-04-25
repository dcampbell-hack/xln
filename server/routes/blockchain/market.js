import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getListingPrice, 
    makeMarketItem, 
    createMarketSale, 
    fetchMarketTokens, 
    fetchMyNFTs, 
    fetchItemsCreated }  from '../../controller/blockchain/market.js';

import { protect, authorize } from '../../middleware/auth.js';

router
.route('/get-listing-price')
.get( getListingPrice );

router
.route('/make-market-item')
.post( makeMarketItem );

router
.route('/create-market-sale')
.post( createMarketSale );

router
.route('/fetch-market-tokens')
.get( fetchMarketTokens );

router
.route('/fetch-my-nfts')
.get( fetchMyNFTs );

router
.route('/fetch-items-created')
.get( fetchItemsCreated )


export default router;