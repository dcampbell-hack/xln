const mongoose = require('mongoose');
const { Schema } = mongoose;

// model: "text-davinci-003",
// prompt: ``,
// max_tokens: 64,
// temperature: 0,
// top_p: 1.0,
// frequency_penalty: 0.0,
// presence_penalty: 0.0,
// stop: ["\n"]

const ChatSchema = new Schema({ 
model: {
    type: String,
    enum: [
    "openai/chatgpt",
    "text-davinci-003"
    ],
    required: [ true, "Include the chat model being used"]
},
prompt: {
    type: String,
    required: [ false, 'Text prompt is required']
},
max_tokens: {
    type: Number,
    required: [ false, "The size of this image is required"]
},
temperature: {
    type: Number,
    required: [ false, "Include the amount of images to be generated" ]
},
top_p: {
   type: Number,
   required: [ false, ""]
},
frequency_penalty: {
    type: Number,
    required: false
},
presence_penalty: {
    type: Number,
    required: false
},
stop: {
    type: String,
    required: false
},
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
ChatSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
ChatSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

module.exports = mongoose.model('Chat', ChatSchema);