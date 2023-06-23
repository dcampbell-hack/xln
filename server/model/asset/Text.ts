import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

import { IText } from '../../type/model.ts'

const TextSchema = new Schema<IText>({ 
asset:  {
    type: 'ObjectId',
    ref: 'Asset',
    required: true
},
user: {
    type: 'ObjectId',
    ref: 'User',
    required: true
}

}, {
    toJSON: { getters: true, virtuals: true },
    toObject: { virtuals: true }
});

//Reverse populate with virtuals
TextSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
TextSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

export default mongoose.model('Text', TextSchema);