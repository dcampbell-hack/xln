import express from 'express';
const router = express.Router({ mergeParams: true});

import {  
    fetchMyNFTs 
}  from '../../controller/blockchain/market.js';

import { protect, authorize } from '../../middleware/auth.ts';


router
.route('/fetch-my-nfts')
.get( fetchMyNFTs );



export default router;