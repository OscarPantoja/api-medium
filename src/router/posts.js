
const express = require('express')

const post = require('../useCases/posts')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const posts = await post.getAll()
    response.json({
      success: true,
      message: 'all posts',
      data: {
        posts
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newPost = await post.create(request.body)
    response.json({
      success: true,
      message: 'Post created',
      data: {
        post: newPost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const postfound = await post.getById(id)

    response.json({
      success: true,
      message: 'post found',
      data: {
        post: postfound
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const postDelete = await post.deleteById(id)

    response.json({
      success: true,
      message: 'Post deleted'
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const postToUpdate = await post.updateById(id, request.body)

    response.json({
      success: true,
      message: 'Post update',
      data: {
        post: postToUpdate
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
