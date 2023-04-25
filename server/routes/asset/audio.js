import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getAudio,
    getAudios,
    createAudio
} from '../../controller/asset/audio.js';

import { protect, authorize } from '../../middleware/auth.js';

router
.route('/')
.post(protect, authorize('publisher', 'admin'), getAudios )
.get(protect, authorize('publisher', 'admin'), createAudio )

router
.route('/:id')
.get(protect, authorize('publisher', 'admin'), getAudio)


export default router;