
const express = require('express')
const user = require('../useCases/user')
const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', async (request, response) => {
  try {
    const userCreated = await user.create(request.body)
    response.json({
      success: true,
      message: 'User created',
      data: {
        user: userCreated
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

router.post('/loggin', async (request, response) => {
  try {
    const { password, email } = request.body

    if (!password || !email) throw new Error('unauthorized')

    const jwt = await user.login(email, password)

    response.json({
      success: true,
      message: 'logged in',
      data: {
        token: jwt
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Unauthorized'
    })
  }
})

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const userDeleted = await user.deleteById(id)
    response.json({
      success: true,
      message: 'User deleted',
      data: {
        user: userDeleted
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
