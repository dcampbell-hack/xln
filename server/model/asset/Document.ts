import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

import { IDocument } from '../../type/model.ts'

const DocumentSchema = new Schema<IDocument>({ 
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
DocumentSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
DocumentSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

export default mongoose.model('Document', DocumentSchema);