import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getText,
    getTexts,
    createText
}  from '../../controller/asset/text.ts';

import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/')
.post(protect, authorize('publisher', 'admin') as any, createText)
.get(protect, authorize('publisher', 'admin') as any, getTexts)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin') as any, getText)


export default router;