import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getLink,
    getLinks,
    createLink
}  from '../../controller/asset/link.js';

import { protect, authorize } from '../../middleware/auth.js';

router
.route('/')
.post(protect, authorize('publisher', 'admin'), createLink)
.get(protect, authorize('publisher', 'admin'), getLinks)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin'), getLink)


export default router;