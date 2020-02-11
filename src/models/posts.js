
const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 10,
    maxlength: 200,
    required: true,
    trim: true
  },
  author: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true,
    toLowerCase: true
  },
  timeToRead: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('posts', postsSchema)
