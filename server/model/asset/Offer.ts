import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

import { IOffer } from '../../type/model.ts'

const OfferSchema = new Schema<IOffer>({
    price: Number,
    resell: Number,
    secondHand: {
        type: Boolean,
        default: false
    },
    accepted: {
       type: Boolean,
    },
    responded: {
        type: Boolean,
        default: false
     },
    seller: {
        type: String,
        required: true
    },
    assetOwner: {
        type: String,
        required: true
    },
    user: {
        type: 'ObjectId',
        ref: 'User',
        required: true
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
        ref: 'Share'
    },
})



export default mongoose.model('Offer', OfferSchema)