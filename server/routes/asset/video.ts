import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getVideo,
    getVideos,
    createVideo
}  from '../../controller/asset/video.ts';

import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/')
.post(protect, authorize('publisher', 'admin') as any, createVideo)
.get(protect, authorize('publisher', 'admin') as any, getVideos)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin') as any, getVideo)


export default router;