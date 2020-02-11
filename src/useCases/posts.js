
const Post = require('../models/posts')

function create ({ title, author, date, timeToRead, img }) {
  const newPost = new Post({ title, author, date, timeToRead, img })
  return newPost.save()
}

function deleteById (id) {
  return Post.findByIdAndDelete(id)
}

function getAll () {
  return Post.find({})
}

function getById (id) {
  return Post.findById(id)
}

function updateById (id, postToUpdate) {
  return Post.findByIdAndUpdate(id, postToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}
