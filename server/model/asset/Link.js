import mongoose from 'mongoose';
const { Schema } = mongoose;

const LinkSchema = new Schema({ 
asset:  {
    type: Schema.ObjectId,
    ref: 'Asset',
    required: true
},
user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
}

}, {
    toJSON: { getters: true, virtuals: true },
    toObject: { virtuals: true }
});

//Reverse populate with virtuals
LinkSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
LinkSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

export default mongoose.model('Link', LinkSchema);