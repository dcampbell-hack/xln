const express = require('express');
const router = express.Router({ mergeParams: true});

const { 
    getAudio,
    getAudios,
    createAudio
}  = require('../../controller/asset/audio');

const { protect, authorize } = require('../../middleware/auth');

router
.route('/')
.post(protect, authorize('publisher', 'admin'), getAudios )
.get(protect, authorize('publisher', 'admin'), createAudio )

router
.route('/:id')
.get(protect, authorize('publisher', 'admin'), getAudio)


module.exports = router;