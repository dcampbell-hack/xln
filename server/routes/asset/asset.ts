import express from 'express';
const router = express.Router();

import { authorize, protect } from '../../middleware/auth.ts';
import advancedResults from '../../middleware/advancedResults.ts';
import Asset from '../../model/Asset.ts'

import { 
    assetCoverUpload, 
    createAsset, 
    deleteAsset, 
    getAsset,
    getUserAssets,  
    getAssets, 
    updateAsset,
    downloadYoutube 
} from '../../controller/asset/asset.ts';

import aiRouter from './ai.ts';
import audioRouter from './audio.js';
import commentsRouter from './comment.js';
import conditionalsRouter from './conditional.js';
import imageRouter from './image.js';
import linkRouter from './link.js';
import offersRouter from './offer.ts';
import reviewsRouter from './review.js';
import sharesRouter from './share.js';
import textRouter from './text.js';
import transactionsRouter from './transaction.js';
import videoRouter from './video.js';

router.use('/:assetId/ai/', aiRouter)
router.use('/asset/audio/', audioRouter)
router.use('/:assetId/comments', commentsRouter);
router.use('/:assetId/conditionals', conditionalsRouter);
router.use('/:assetId/image', imageRouter);
router.use('/:assetId/link', linkRouter);
router.use('/:assetId/offers', offersRouter)
router.use('/:assetId/reviews', reviewsRouter)
router.use('/:assetId/shares', sharesRouter)
router.use('/:assetId/text', textRouter);
router.use('/:assetId/tx', transactionsRouter);
router.use('/:assetId/video', videoRouter);

router
.route('/')
.get(protect, authorize('user','publisher', 'admin') as any, advancedResults(Asset, {
path: 'reviews, comments, shares, conditionals, offers',
select: '_id'
})  as any, getAssets)
.post(protect, authorize('publisher', 'admin') as any, createAsset );

router
.route('/:id/user')
.get(protect, authorize('publisher', 'admin') as any, getUserAssets );

router.
route('/:id')
.get(protect, authorize('publisher', 'admin') as any,   advancedResults(Asset, {
    path: 'shares',
    select: '_id'
})  as any, getAsset)
.put(protect, authorize('publisher', 'admin') as any,  updateAsset)
.delete(protect, authorize('publisher', 'admin') as any,  deleteAsset);

router
.route('/youtube')
.post(protect, authorize('publisher', 'admin') as any,  downloadYoutube )

router
.route('/:id/cover')
.post(protect, authorize('publisher', 'admin') as any,  assetCoverUpload)

export default router;