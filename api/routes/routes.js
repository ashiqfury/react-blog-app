const app = require('express').Router()

const authRoute = require('./auth')
const usersRoute = require('./users')
const postsRoute = require('./posts')
const categoriesRoute = require('./categories')
const commentsRoute = require('./comments')

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/api/categories', categoriesRoute)
app.use('/api/comments', commentsRoute)

module.exports = app
