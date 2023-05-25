import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

import { ITransaction } from '../../type/model.ts'

const TransactionSchema = new Schema<ITransaction>({
  price: {
      type: Number,
      require: [ true, 'Transaction must include price']
  },
   seller: {
     type: String  
   },
  user: {
      type: 'ObjectId',
      ref: 'User',
      required: true
  },
  asset: {
      type: 'ObjectId',
      ref: 'Asset',
      required: true
  },
  share: {
    type: 'ObjectId',
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

export default mongoose.model('Transaction', TransactionSchema)