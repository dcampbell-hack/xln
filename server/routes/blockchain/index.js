const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    getContractAddress,
    updateUserAddress
}  = require('../../controller/blockchain/');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/get-contract-address')
.get( getContractAddress );


router
.route('/address')
.post(protect, authorize('publisher', 'admin'), updateUserAddress );

module.exports = router;