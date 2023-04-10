const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    getVideo,
    getVideos,
    createVideo
}  = require('../../controller/asset/video');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/')
.post(protect, authorize('publisher', 'admin'), createVideo)
.get(protect, authorize('publisher', 'admin'), getVideos)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin'), getVideo)


module.exports = router;