const mongoose = require('mongoose');
const { Schema } = mongoose;

const AIModelSchema = new Schema({ 
model: {
    type: String,
    enum: [
       'Open AI', 'Stable Diffusion v2.1', 'Mid-Journey v4'
    ],
    required: [ true, "Include the AI model being used"]
},
url: {
    type: String,
    required: [ true, 'Url to generated image is required' ]
},
prompt: {
    type: String,
    required: [ true, 'Text prompt is required']
},
size: {
    type: String,
    enum: [
       '1024x1024', '512x512', '256x256'
    ],
    required: [ true, "The size of this image is required"]
},
numOfImg: {
    type: Number,
    enum: [
        1, 4, 8
     ],
    required: [ true, "Include the amount of images to be generated" ]
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
AIModelSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
AIModelSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

module.exports = mongoose.model('AIModel', AIModelSchema);