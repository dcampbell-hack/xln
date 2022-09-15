const mongoose = require('mongoose');
const { Schema } = mongoose;
const ErrorResponse = require('../utils/errorResponse');

const LinkSchema = new Schema({ 
platform: {
    type: String,
    required: [true, 'File name is required']
},
url: {
    type: String,
    required: [true, 'File path is required']
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


module.exports = LinkSchema;