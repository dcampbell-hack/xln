import express from 'express';
const router = express.Router({ mergeParams: true });
import advancedResults from '../../middleware/advancedResults.js';

import Review from '../../model/asset/Review.js';
import { addReview, getReview, getReviews, updateReview, deleteReview }  from '../../controller/asset/review.js';
import { protect, authorize } from '../../middleware/auth.js';

import commentsRouter from './comment.js';
router.use('/:reviewId/comments', commentsRouter);

router
.route('/')
.get(protect, authorize('user','publisher', 'admin'), advancedResults(Review, {
    path: 'comments',
    select: 'name description'
}), getReviews)
.post(protect, authorize('publisher', 'admin'), addReview);

router
.route('/:id')
.get(protect, authorize('user','publisher', 'admin'), getReview)
.put(protect, authorize('publisher', 'admin'), updateReview)
.delete(protect, authorize('publisher', 'admin'), deleteReview );

export default router;