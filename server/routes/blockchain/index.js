const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    getContractAddress 
}  = require('../../controller/blockchain/');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/get-contract-address')
.get( getContractAddress );



module.exports = router;