const express = require('express');
const Share = require('../../model/asset/Share');
const router = express.Router({ mergeParams: true });

const { addShare, getShare, getShares, updateShare, deleteShare } = require('../../controller/asset/share');
const { createOfferResell } = require('../../controller/asset/offer');
const { protect, authorize } = require('../../middleware/auth');
const advancedResults = require('../../middleware/advancedResults');

const transactionRouter = require('./transaction');
const commentsRouter = require('./comment');

router.use('/:shareId/tx', transactionRouter);
router.use('/:shareId/comments', commentsRouter);


router.route('/')
      .get( advancedResults(Share, {
    path: 'comments',
    select: 'name description cover'
}), getShares)
.post(protect, authorize('publisher', 'admin'), addShare)

router.route('/:id')
      .get(protect, authorize('publisher', 'admin'), getShare)
      .put(protect, authorize('publisher', 'admin'), updateShare)
      .delete(protect, authorize('publisher', 'admin'), deleteShare)

router.route('/:shareId/resell')
      .post(protect, authorize('publisher', 'admin'), createOfferResell )

module.exports = router;