import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

import { IVideo } from '../../type/model.ts'

const VideoSchema = new Schema<IVideo>({ 
    category: {
        type: [String],
        required: true,
        enum: [
            "Autos & Vehicles",
            "Comedy",
            "Education",
            "Entertainment",
            "Fashion",
            "Film & Animation",
            "Gaming",
            "Howto & Style",
            "Music",
            "News & Politics",
            "Nonprofits & Activism",
            "People & Blogs",
            "Pets & Animals",
            "Science & Technology",
            "Sports",
            "Travel & Events",
        ]
    },
    language: {
        type: [String],
        required: true,
        enum: [
            "English",
            "Spanish",
        ]
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
    title: {
        type: String,
    },
   detail: {
    type: String
   },

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
VideoSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
VideoSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

export default mongoose.model('Video', VideoSchema);