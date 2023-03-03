const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    generateArt,
    getAssetArt
}  = require('../../controller/ai');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/art')
.post(protect, authorize('publisher', 'admin'), generateArt)
.get(protect, authorize('publisher', 'admin'), getAssetArt)


module.exports = router;