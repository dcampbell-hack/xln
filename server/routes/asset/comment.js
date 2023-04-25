import express from 'express';
const router = express.Router({ mergeParams: true});

import advancedResults from '../../middleware/advancedResults.js';

import { addComment, getComment, getComments, updateComment, deleteComment }  from '../../controller/asset/comment.js';

import Comment from '../../model/asset/Comment.js';
import { protect, authorize } from '../../middleware/auth.js';

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

export default router;