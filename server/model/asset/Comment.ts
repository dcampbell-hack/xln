import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

import { IComment } from '../../type/model.ts'

const CommentSchema = new Schema<IComment>({
    text: {
        type: String,
        required: [true, 'Please add text']
     },
     createdAt: {
        type: Date,
        default: Date.now
    },
     asset: {
        type: 'ObjectId',
        ref: 'Asset',
        required: true
    },
    share: {
        type: 'ObjectId',
        ref: 'Share',
    },
    user: {
        type: 'ObjectId',
        ref: 'User',
        required: true
    },
    review: {
        type: 'ObjectId',
        ref: 'Review',
    },
    offer: {
        type: 'ObjectId',
        ref: 'Offer',
    },
})

export default mongoose.model('Comment', CommentSchema);