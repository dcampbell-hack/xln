const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const TransactionSchema = new Schema({
  price: {
      type: Number,
      require: [ true, 'Transaction must include price']
  },
   seller: {
     type: String  
   },
  user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: true
  },
  asset: {
      type: Schema.ObjectId,
      ref: 'Asset',
      required: true
  },
  share: {
    type: Schema.ObjectId,
    ref: 'Share',
    required: true
  },
    createdAt: { 
     type: Date,
     date: Date.now
    }
});


//Create share User ownership of Share & Add shareId to user 
// TransactionSchema.post('save', async function(){ 

//   try { 

//     console.log('Transaction created', this.id )

//    } catch(err){ 
//     console.log(err) 
//   }

// });

module.exports = mongoose.model('Transaction', TransactionSchema)