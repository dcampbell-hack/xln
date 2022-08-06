const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    getListingPrice, 
    makeMarketItem, 
    createMarketSale, 
    fetchMarketTokens, 
    fetchMyNFTs, 
    fetchItemsCreated }  = require('../../controller/blockchain/market');

const { protect, authorize } = require('../../middleware/auth');

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


module.exports = router;