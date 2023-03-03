const express = require('express');
const router = express.Router();
const { authorize, protect } = require('../middleware/auth');
const advancedResults = require('../middleware/advancedResults');
const Asset = require('../model/Asset')

const { 
    assetCoverUpload, 
    createAsset, 
    deleteAsset, 
    getAsset,
    getAssetsInRadius,
    getUserAssets,  
    getAssets, 
    updateAsset,
    downloadYoutube 
} = require('../controller/asset');

const aiRouter = require('./ai/');
const sharesRouter = require('./share');
const offersRouter = require('./offer');
const reviewsRouter = require('./review');
const commentsRouter = require('./comment');
const conditionalsRouter = require('./conditional');
const transactionsRouter = require('./transaction');

router.use('/:assetId/ai/', aiRouter)
router.use('/:assetId/shares', sharesRouter)
router.use('/:assetId/offers', offersRouter)
router.use('/:assetId/reviews', reviewsRouter)
router.use('/:assetId/comments', commentsRouter);
router.use('/:assetId/conditionals', conditionalsRouter);
router.use('/:assetId/tx', transactionsRouter);

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


module.exports = router;