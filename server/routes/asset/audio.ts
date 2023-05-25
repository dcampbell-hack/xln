import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getAudio,
    getAudios,
    createAudio
} from '../../controller/asset/audio.ts';

import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/')
.get(protect, authorize('publisher', 'admin') as any, getAudios )
.post(protect, authorize('publisher', 'admin') as any, createAudio )

router
.route('/:id')
.get(protect, authorize('publisher', 'admin') as any, getAudio)


export default router;