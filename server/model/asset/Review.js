import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReviewSchema = new Schema({
    title: {
        type: String,
        trim: true,
        maxlength: 100,
        unique: [ true, 'This title has already been used.'],
        required: [ true, 'Please add a title for review']
    },
    text: {
       type: String,
       unique: [ true, 'This review has already been written.'],
       required: [true, 'Please add text']
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, 'Please add a rating between 1 & 5']
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    comment: {
        type: Schema.ObjectId,
        ref: 'Comment',
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

})

ReviewSchema.index({ user: 1 }, { unique: true })

//Static method to getAverageRating and save 
ReviewSchema.statics.getAverageRating = async function(assetId){
    const obj = await this.aggregate([
        {
            $match: {
                asset: assetId
            }
        },
        {
            $group: {
                _id: '$asset',
                averageRating: { $avg: '$rating'}
            }
        }
    ])

    try {
      await this.model('Asset').findByIdAndUpdate(assetId, {
        averageRating: Math.ceil(obj[0].averageRating / 10) * 10
      })
    } catch(err){
        console.error(err)
    }
}

//Call getAverageRating after save 
ReviewSchema.post('save', function(){
    this.constructor.getAverageRating(this.asset)
});

//Call getAverageRating before save 
ReviewSchema.pre('remove', function(){
    this.constructor.getAverageRating(this.asset)
});

//Reverse populate with virtuals
ReviewSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'comment',
    justOne: false
})

export default mongoose.model('Review', ReviewSchema)