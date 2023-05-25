import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

import { IAudio } from '../../type/model.ts'

const AudioSchema = new Schema<IAudio>({ 
audioName: {
    type: String,
    required: [ true, 'Please add song name'],
},
composer: {
    type: String,
    required: [ true, 'Please add band name'],
},
lyrics: {
    type: String,
    required: [ true, 'Please add lyrics'],
},
producer: {
   type: String,
},
audioCover: {
    type: String,
    default: 'no-photo.jpg',
    required: false
},
audioFile: {
    type: String,
    default: 'no-photo.jpg',
    required: false
},
asset:  {
    type:'ObjectId',
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
AudioSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
AudioSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

export default mongoose.model('Audio', AudioSchema);