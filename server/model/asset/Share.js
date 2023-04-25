import mongoose from 'mongoose';
const { Schema } = mongoose;
import ErrorResponse from '../../utils/errorResponse.js';
import { checkModelForDuplicate } from '../../middleware/checkModelForDuplicate.js';
import Shareholder from '../Shareholder.js';
import getUniqArr from '../../middleware/getUniqueArr.js';

const ShareSchema = new Schema({
    shareNumber: {
        type: Number,
        required: [false, 'Share number must be added']
    },
    name: {
        type: String,
        trim: false,
        require: [ false, 'Please name share']
    },
    description: {
        type: String,
        required: [false, 'Please add description']
    },
    price: {
      type: Number,
      required: false
    },
    resell: {
        type: Boolean,
        default: true
    },
    minCost: {
      type: Number
    },
    to_user: {
        type: String,
        required: true
    },
    authorization: {
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
  comment: {
    type: Schema.ObjectId,
    ref: 'Comment',
},
createdAt: {
      type: Date,
      default: Date.now
  }
});


//Static method to get average price of all Asset shares 
ShareSchema.statics.getAverageCost = async function(assetId){
    //Calculating average cost 
    const obj = await this.aggregate([
        {
            $match: {
                asset: assetId
            }
        },
        {
            $group: {
                _id: '$asset',
                averagePrice: { $avg: '$price'},
                marketcap: { $sum: { $add: ['$price'] } }

            }
        }
    ]);

try {
    await this.model('Asset').findByIdAndUpdate(assetId, {
        averagePrice: Math.floor(obj[0].averagePrice),
        marketcap: obj[0].marketcap
    })
} catch(err){
    console.error(err)
}
}

//Call getAverageCost after after save
ShareSchema.post('save', function(){
    this.constructor.getAverageCost(this.asset)
})


//Call getAverageCost after after save
ShareSchema.post('save', async function(){
    
    const minCost = async () => {
        const asset = await this.model('Asset').find({ _id: this.asset });

        if(!asset){
        next(new ErrorResponse('asset was not found was not found', 404));
        };

        const { minCost } = asset;

        return minCost
    }
    
    this.minCost = minCost();
});

//Update User ownership of Share & Add shareId to user 
ShareSchema.post('save', async function(){ 

    try {

        const assets = await this.model('Asset').find({ user: this.user })
        const shares = await this.model('Share').find({ asset: this.asset })
        const shareIds = shares.map(({ user, asset }) => { 
           return { user, asset }
        })
        const flow = shares.length;

        let uniqueShareholders = getUniqArr(shareIds, 'user');

        await this.model('Asset').findByIdAndUpdate( this.asset, { flow: flow })


       uniqueShareholders.forEach( ({ user }) => async () => {
        const check = await this.model('Shareholder').findOneAndUpdate({ user }, { sharesOwned: shareIds})
    })

    } catch(err){
        console.error(err)
    }

});

//Update conditionals
ShareSchema.post('save', async function(){ 

    try {

     const asset = await this.model('Asset').findOne({ asset: this.asset });

     let shares_reached_max_capacity = false;
     if(asset.stock === asset.flow){
        shares_reached_max_capacity = true;
     }
     const conditional = await this.model('Conditionals').findOneAndUpdate({ asset: this.asset }, {  sold_shares: true, shares_reached_max_capacity  })


    } catch(err){
        console.error(err)
    }

})


//Call getAverageCost before remove
ShareSchema.pre('remove', function(){
    this.constructor.getAverageCost(this.asset)
})

//Reverse populate with virtuals
ShareSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'comment',
    justOne: false
})

export default mongoose.model('Share', ShareSchema )