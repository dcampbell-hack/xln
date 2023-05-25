import express from 'express';
const router = express.Router({ mergeParams: true });

import Share from '../../model/asset/Share.js';
import { addShare, getShare, getShares, updateShare, deleteShare } from '../../controller/asset/share.ts';
import { createOfferResell } from '../../controller/asset/offer.ts';
import { protect, authorize } from '../../middleware/auth.ts';
import advancedResults from '../../middleware/advancedResults.ts';

import transactionRouter from './transaction.js';
import commentsRouter from './comment.ts';

router.use('/:shareId/tx', transactionRouter);
router.use('/:shareId/comments', commentsRouter);


router.route('/')
      .get( advancedResults(Share, {
    path: 'comments',
    select: 'name description cover'
}) as any, getShares)
.post(protect, authorize('publisher', 'admin') as any, addShare)

router.route('/:id')
      .get(protect, authorize('publisher', 'admin') as any, getShare)
      .put(protect, authorize('publisher', 'admin') as any, updateShare)
      .delete(protect, authorize('publisher', 'admin') as any, deleteShare)

router.route('/:shareId/resell')
      .post(protect, authorize('publisher', 'admin') as any, createOfferResell )

      export default router;