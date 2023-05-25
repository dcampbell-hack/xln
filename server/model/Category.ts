import mongoose from 'mongoose';
const { Schema } = mongoose;

import { ICategory } from '../type/model.ts';



const CategorySchema = new Schema<ICategory>({
   name: {
       type: String,
       unique: true
   }
})

export default mongoose.model('Category', CategorySchema)