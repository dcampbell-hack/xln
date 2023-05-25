import express from 'express';
const router = express.Router({ mergeParams: true});
import { IConditional } from '../../type/model.ts'; 
import advancedResults from '../../middleware/advancedResults.ts';

import { getConditional, createConditional, updateConditional }  from '../../controller/asset/conditional.ts';

import Conditional from '../../model/Conditional.ts';
import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/')
.get(advancedResults(Conditional, {
    path: 'asset',
    select: 'name description'
}) as any, getConditional )
.post(protect, authorize('publisher', 'admin') as any, createConditional )
.put(protect, authorize('publisher', 'admin') as any, updateConditional )


export default router;