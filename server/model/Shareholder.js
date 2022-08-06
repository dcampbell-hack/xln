const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const sharesOwnedCollection = new Schema({ shareId: String })

const ShareholderSchema = new Schema({
  user: {
      type: Schema.ObjectId,
      ref: 'User'
  },
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
  asset: {
    type: Schema.ObjectId,
    ref: 'Asset'
},
    createdAt: { 
     type: Date,
     date: Date.now
    }
})

module.exports = mongoose.model('Shareholder',  ShareholderSchema)