import express from 'express';
const router = express.Router({ mergeParams: true});

import advancedResults from '../../middleware/advancedResults.ts';

import { addComment, getComment, getComments, updateComment, deleteComment }  from '../../controller/asset/comment.ts';

import Comment from '../../model/asset/Comment.ts';
import { protect, authorize } from '../../middleware/auth.ts';

router
.route('/')
.get(advancedResults(Comment, {
    path: 'asset',
    select: 'name description'
})  as any, getComments )
.post(protect, authorize('publisher', 'admin') as any, addComment );

router
.route('/:id')
.get(getComment )
.put(protect, authorize('publisher', 'admin') as any, updateComment )
.delete(protect, authorize('publisher', 'admin') as any, deleteComment );

export default router;