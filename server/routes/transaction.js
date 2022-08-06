const express = require('express');
const router = express.Router({ mergeParams: true });

const { getTransactions, getTransaction, createTransaction } = require('../controller/transaction');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');
const Transaction = require('../model/Transaction');

const commentsRouter = require('./comment');
router.use('/:txId/comments', commentsRouter)


router.route('/')
      .get(protect, authorize('publisher', 'admin'), advancedResults(Transaction, {
            path: 'comments',
            select: 'name description cover'
        }), getTransactions)
        .post(protect, authorize( 'publisher', 'admin'), createTransaction );     

router.route('/:txId')
      .get(protect, authorize('publisher', 'admin'), getTransaction)
      
module.exports = router;