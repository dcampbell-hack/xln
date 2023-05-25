import mongoose from 'mongoose';
const { Schema } = mongoose;

const sharesOwnedCollection = new Schema({ shareId: String })

const ShareholderSchema = new Schema({
  assetsOwned: Number,
  sharesOwned: Number,
  shareCollection: sharesOwnedCollection,
  masternode: {
    type: Boolean,
    default: false
  },
  supernode: {
    type: Boolean,
    default: false
  },
    createdAt: { 
     type: Date,
     date: Date.now
    },
    asset: {
      type: 'ObjectId',
      ref: 'Asset'
  },
  user: {
    type: 'ObjectId',
    ref: 'User'
  },
})

export default mongoose.model('Shareholder',  ShareholderSchema)