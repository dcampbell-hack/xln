import express from 'express';
const router = express.Router({ mergeParams: true });

import Share from '../../model/asset/Share.js';
import { addShare, getShare, getShares, updateShare, deleteShare } from '../../controller/asset/share.js';
import { createOfferResell } from '../../controller/asset/offer.js';
import { protect, authorize } from '../../middleware/auth.js';
import advancedResults from '../../middleware/advancedResults.js';

import transactionRouter from './transaction.js';
import commentsRouter from './comment.js';

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

      export default router;