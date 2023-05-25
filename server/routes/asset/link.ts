import express from 'express';
const router = express.Router({ mergeParams: true});

import { 
    getLink,
    getLinks,
    createLink
}  from '../../controller/asset/link.ts';

import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/')
.post(protect, authorize('publisher', 'admin') as any, createLink)
.get(protect, authorize('publisher', 'admin') as any, getLinks)

router
.route('/:id')
.get(protect, authorize('publisher', 'admin') as any, getLink)


export default router;