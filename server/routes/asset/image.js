import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getImage,
    getImages,
    createImage
}  from '../../controller/asset/image.js';

import { protect, authorize } from '../../middleware/auth.js';

router
.route('/')
.post(protect, authorize('publisher', 'admin'), createImage)
.get(protect, authorize('publisher', 'admin'), getImages)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin'), getImage)


export default router;