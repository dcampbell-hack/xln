import mongoose from 'mongoose';
const { Schema } = mongoose;

const OfferSchema = new Schema({
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
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    asset: {
        type: Schema.ObjectId,
        ref: 'Asset',
        required: true
    },
    share: {
        type: Schema.ObjectId,
        ref: 'Share'
    },
    price: Number,
    resell: Number

})



export default mongoose.model('Offer', OfferSchema)