const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    text: {
        type: String,
        required: [true, 'Please add text']
     },
     asset: {
        type: Schema.ObjectId,
        ref: 'Asset',
        required: true
    },
    share: {
        type: Schema.ObjectId,
        ref: 'Share',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    review: {
        type: Schema.ObjectId,
        ref: 'Review',
    },
    offer: {
        type: Schema.ObjectId,
        ref: 'Offer',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Comment', CommentSchema);