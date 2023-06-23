import express from 'express';
const router = express.Router({ mergeParams: true});

import { mintNFT }  from '../../controller/blockchain/nft.js';

import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/mintNFT')
.post( mintNFT );


export default router;