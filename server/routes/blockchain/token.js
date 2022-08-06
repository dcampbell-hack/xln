const express = require('express');
const router = express.Router({ mergeParams: true});

const { updateAdmin, mint }  = require('../../controller/blockchain/token');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/update-admin')
.post( updateAdmin );

router
.route('/mint')
.post( mint );


module.exports = router;