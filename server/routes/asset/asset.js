import express from 'express';
const router = express.Router();

import { authorize, protect } from '../../middleware/auth.js';
import advancedResults from '../../middleware/advancedResults.js';
import Asset from '../../model/Asset.js'

import { 
    assetCoverUpload, 
    createAsset, 
    deleteAsset, 
    getAsset,
    getAssetsInRadius,
    getUserAssets,  
    getAssets, 
    updateAsset,
    downloadYoutube 
} from '../../controller/asset/asset.js';

import aiRouter from './ai.js';
import audioRouter from './audio.js';
import commentsRouter from './comment.js';
import conditionalsRouter from './conditional.js';
import imageRouter from './image.js';
import linkRouter from './link.js';
import offersRouter from './offer.js';
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
.get(protect, authorize('user','publisher', 'admin'), advancedResults(Asset, {
path: 'reviews, comments, shares, conditionals, offers',
select: '_id'
}), getAssets)
.post(protect, authorize('publisher', 'admin'), createAsset );

router
.route('/:id/user')
.get(protect, authorize('publisher', 'admin'), getUserAssets );

router.
route('/:id')
.get(protect, authorize('publisher', 'admin'),  advancedResults(Asset, {
    path: 'shares',
    select: '_id'
}), getAsset)
.put(protect, authorize('publisher', 'admin'), updateAsset)
.delete(protect, authorize('publisher', 'admin'), deleteAsset);

router
.route('/youtube')
.post(protect, authorize('publisher', 'admin'), downloadYoutube )

router
.route('/:id/cover')
.post(protect, authorize('publisher', 'admin'), assetCoverUpload)

router
.route('/radius/:zipcode/:distance')
.get(getAssetsInRadius)


export default router;