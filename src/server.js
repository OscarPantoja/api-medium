
const express = require('express')

const postsRouter = require('./router/posts')

const app = express()

app.use(express.json())

app.use('/posts', postsRouter)

module.exports = app
