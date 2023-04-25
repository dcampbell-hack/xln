import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getText,
    getTexts,
    createText
}  from '../../controller/asset/text.js';

import { protect, authorize } from '../../middleware/auth.js';

router
.route('/')
.post(protect, authorize('publisher', 'admin'), createText)
.get(protect, authorize('publisher', 'admin'), getTexts)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin'), getText)


export default router;