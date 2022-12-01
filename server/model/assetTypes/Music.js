const mongoose = require('mongoose');
const { Schema } = mongoose;
const ErrorResponse = require('../utils/errorResponse');

const MusicSchema = new Schema({ 
asset:  {
    type: Schema.ObjectId,
    ref: 'Asset',
    required: false
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
MusicSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
MusicSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

module.exports = MusicSchema;