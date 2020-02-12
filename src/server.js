
const express = require('express')
const cors = require('cors')

const postsRouter = require('./router/posts')
const usersRouter = require('./router/user')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/posts', postsRouter)

app.use('/user', usersRouter)

module.exports = app
