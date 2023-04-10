const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    textToImage,
    textToAiChat
}  = require('../../controller/asset/ai');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/art')
.post(protect, authorize('publisher', 'admin'), textToImage)
// .get(protect, authorize('publisher', 'admin'), getAssetArt)

router
.route('/chat')
.post(protect, authorize('publisher', 'admin'), textToAiChat)


module.exports = router;