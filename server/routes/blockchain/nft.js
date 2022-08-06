const express = require('express');
const router = express.Router({ mergeParams: true});

const { mintNFT }  = require('../../controller/blockchain/nft');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/mintNFT')
.post( mintNFT );


module.exports = router;