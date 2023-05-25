import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getImage,
    getImages,
    createImage
}  from '../../controller/asset/image.ts';

import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/')
.post(protect, authorize('publisher', 'admin') as any, createImage)
.get(protect, authorize('publisher', 'admin') as any, getImages)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin') as any, getImage)


export default router;