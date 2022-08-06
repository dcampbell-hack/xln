const express = require('express');
const router = express.Router({ mergeParams: true});

const advancedResults = require('../middleware/advancedResults');

const { getConditional, createConditional, updateConditional }  = require('../controller/conditional');

const Conditional = require('../model/Conditional');
const { protect, authorize } = require('../middleware/auth');

router
.route('/')
.get(advancedResults(Conditional, {
    path: 'asset',
    select: 'name description'
}), getConditional )
.post(protect, authorize('publisher', 'admin'), createConditional )
.put(protect, authorize('publisher', 'admin'), updateConditional )


module.exports = router;