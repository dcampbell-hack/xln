import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getVideo,
    getVideos,
    createVideo
}  from '../../controller/asset/video.js';

import { protect, authorize } from '../../middleware/auth.js';

router
.route('/')
.post(protect, authorize('publisher', 'admin'), createVideo)
.get(protect, authorize('publisher', 'admin'), getVideos)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin'), getVideo)


export default router;