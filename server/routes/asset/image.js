const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    getImage,
    getImages,
    createImage
}  = require('../../controller/asset/image');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/')
.post(protect, authorize('publisher', 'admin'), createImage)
.get(protect, authorize('publisher', 'admin'), getImages)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin'), getImage)


module.exports = router;