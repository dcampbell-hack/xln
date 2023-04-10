const express = require('express');
const Review = require('../../model/asset/Review');
const router = express.Router({ mergeParams: true });
const advancedResults = require('../../middleware/advancedResults');

const { addReview, getReview, getReviews, updateReview, deleteReview }  = require('../../controller/asset/review');
const { protect, authorize } = require('../../middleware/auth');

const commentsRouter = require('./comment');
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

module.exports = router;