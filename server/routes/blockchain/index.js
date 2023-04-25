import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getContractAddress,
    updateUserAddress
}  from '../../controller/blockchain/index.js'

import { protect, authorize } from '../../middleware/auth.js'

router
.route('/get-contract-address')
.get( getContractAddress );


router
.route('/address')
.post(protect, authorize('publisher', 'user', 'admin'), updateUserAddress );

export default router;