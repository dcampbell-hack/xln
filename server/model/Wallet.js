const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const ErrorResponse = require('../utils/errorResponse');

const WalletSchema = new Schema({
  balance: {
    type: String,
    require: [ true, 'User must have a balance']
},
address: {
   type: String,
   require: [true, "wallet address must be included"]
},
active: {
  type: Boolean,
  default: false
},
  user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: true
  },
    createdAt: { 
     type: Date,
     date: Date.now
    }
});

//Only one wallet can be active at a time
WalletSchema.pre('save', async function(next){

/*
  // if(this.balance > 0.00001){
  //    new ErrorResponse('Balance must be greater than 0 to create a wallet', 500)
  // }
*/

console.log('Check ')

const user = await this.model('User').findById(this.user);
//if(user.role !== 'system'){ 
  await this.model('User').findByIdAndUpdate(this.user, { role: 'publisher', balance: this.balance, address: this.address });
//}
  next();
  
})


module.exports = mongoose.model('Wallet', WalletSchema)