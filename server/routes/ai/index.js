const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    generateArt
}  = require('../../controller/ai');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/art')
.post(protect, authorize('publisher', 'admin'), generateArt)


module.exports = router;