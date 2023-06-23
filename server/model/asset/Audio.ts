import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

import { IAudio } from '../../type/model.ts'


  //  size: 5613746,
  //  encoding: '7bit',
  //  tempFilePath: '',
  //  truncated: false,
  //  mimetype: 'audio/mpeg',
  //  md5: '05cedffc59024b03ae057e19fb3a1c05',

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
filePath: {
    type: String,
    required: false
},
size: {
    type: Number,
    required: true
},
encoding: {
  type: String,
  required: true
},
mimetype: {
    type: String,
    required: true
},
md5: {
    type: String,
    required: true
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