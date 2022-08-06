const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
   name: {
       type: String,
       unique: true
   }
})

module.exports = mongoose.model('Category', CategorySchema)