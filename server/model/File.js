const mongoose = require('mongoose');
const { Schema } = mongoose;
const ErrorResponse = require('../utils/errorResponse');

const FileSchema = new Schema({ 
filename: {
    type: String,
    required: [true, 'File name is required']
},
filepath: {
    type: String,
    required: [true, 'File path is required']
},
filetype: {
    type: String,
    required: [ true, 'File type is required']
},
filesize: {
    type: String,
    required: [ true, 'File size is required']
},
active: {
    type: Boolean,
    default: false
},
category: {
  type: String,
  required: [true, 'relationship is required']
},
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
FileSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
FileSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

module.exports = FileSchema;