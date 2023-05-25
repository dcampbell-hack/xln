import express from 'express';
const router = express.Router({ mergeParams: true });
import advancedResults from '../../middleware/advancedResults.ts';

import Review from '../../model/asset/Review.js';
import { addReview, getReview, getReviews, updateReview, deleteReview }  from '../../controller/asset/review.ts';
import { protect, authorize } from '../../middleware/auth.ts';

import commentsRouter from './comment.ts';
router.use('/:reviewId/comments', commentsRouter);

router
.route('/')
.get(protect, authorize('user','publisher', 'admin') as any, advancedResults(Review, {
    path: 'comments',
    select: 'name description'
})  as any, getReviews)
.post(protect, authorize('publisher', 'admin') as any, addReview);

router
.route('/:id')
.get(protect, authorize('user','publisher', 'admin') as any, getReview)
.put(protect, authorize('publisher', 'admin') as any, updateReview)
.delete(protect, authorize('publisher', 'admin') as any, deleteReview );

export default router;