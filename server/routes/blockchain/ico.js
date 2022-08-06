const express = require('express');
const router = express.Router({ mergeParams: true});

const { start, buyXLN, withdrawTokens, withdrawDai }  = require('../../controller/blockchain/ico');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/start')
.post( start );

router
.route('/buyXLN')
.post( buyXLN );

router
.route('/withdrawTokens')
.post( withdrawTokens );

router
.route('/withdrawDai')
.post( withdrawDai );


module.exports = router;