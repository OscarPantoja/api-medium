
const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
    trim: true
  },
  author: {
    type: String,
    minlength: 2,
    maxlength: 20,
    required: true,
    trim: true
  },
  dateCreated: {
    type: Date,
    default: new Date()
  },
  timeToRead: {
    type: Number,
    min: 1,
    required: true
  },
  img: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 500
  }
})

module.exports = mongoose.model('posts', postsSchema)
