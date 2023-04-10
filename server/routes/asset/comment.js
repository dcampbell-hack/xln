const express = require('express');
const router = express.Router({ mergeParams: true});

const advancedResults = require('../../middleware/advancedResults');

const { addComment, getComment, getComments, updateComment, deleteComment }  = require('../../controller/asset/comment');

const Comment = require('../../model/asset/Comment');
const { protect, authorize } = require('../../middleware/auth');

router
.route('/')
.get(advancedResults(Comment, {
    path: 'asset',
    select: 'name description'
}), getComments )
.post(protect, authorize('publisher', 'admin'), addComment );

router
.route('/:id')
.get(getComment )
.put(protect, authorize('publisher', 'admin'), updateComment )
.delete(protect, authorize('publisher', 'admin'), deleteComment );

module.exports = router;