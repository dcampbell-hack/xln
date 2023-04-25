import express from 'express';
const router = express.Router({ mergeParams: true});

import advancedResults from '../../middleware/advancedResults.js';

import { getConditional, createConditional, updateConditional }  from '../../controller/asset/conditional.js';

import Conditional from '../../model/Conditional.js';
import { protect, authorize } from '../../middleware/auth.js';

router
.route('/')
.get(advancedResults(Conditional, {
    path: 'asset',
    select: 'name description'
}), getConditional )
.post(protect, authorize('publisher', 'admin'), createConditional )
.put(protect, authorize('publisher', 'admin'), updateConditional )


export default router;