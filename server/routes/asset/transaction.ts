import express from 'express';
const router = express.Router({ mergeParams: true });

import { getTransactions, getTransaction, createTransaction } from '../../controller/asset/transaction.ts';
import advancedResults from '../../middleware/advancedResults.ts';
import { protect, authorize } from '../../middleware/auth.ts';
import Transaction from '../../model/asset/Transaction.js';

import commentsRouter from './comment.ts';
router.use('/:txId/comments', commentsRouter)


router.route('/')
      .get(protect, authorize('publisher', 'admin') as any, advancedResults(Transaction, {
            path: 'comments',
            select: 'name description cover'
        }) as any, getTransactions)
        .post(protect, authorize( 'publisher', 'admin') as any, createTransaction );     

router.route('/:txId')
      .get(protect, authorize('publisher', 'admin') as any, getTransaction)
      
      export default router;