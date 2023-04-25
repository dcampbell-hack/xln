import express from 'express';
const router = express.Router({ mergeParams: true });

import { getTransactions, getTransaction, createTransaction } from '../../controller/asset/transaction.js';
import advancedResults from '../../middleware/advancedResults.js';
import { protect, authorize } from '../../middleware/auth.js';
import Transaction from '../../model/asset/Transaction.js';

import commentsRouter from './comment.js';
router.use('/:txId/comments', commentsRouter)


router.route('/')
      .get(protect, authorize('publisher', 'admin'), advancedResults(Transaction, {
            path: 'comments',
            select: 'name description cover'
        }), getTransactions)
        .post(protect, authorize( 'publisher', 'admin'), createTransaction );     

router.route('/:txId')
      .get(protect, authorize('publisher', 'admin'), getTransaction)
      
      export default router;