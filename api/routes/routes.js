const router = require('express').Router()

const authRoute = require('./auth')
const usersRoute = require('./users')
const postsRoute = require('./posts')
const categoriesRoute = require('./categories')
const commentsRoute = require('./comments')

router.use('/api/auth', authRoute)
router.use('/api/users', usersRoute)
router.use('/api/posts', postsRoute)
router.use('/api/categories', categoriesRoute)
router.use('/api/comments', commentsRoute)

module.exports = router
