const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const postsRoute = require('./routes/posts')
const categoriesRoute = require('./routes/categories')
const commentsRoute = require('./routes/comments')
const multer = require('multer')
const path = require('path')

dotenv.config()

app.use(express.json())

app.use('/images', express.static(path.join(__dirname, '/images')))

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
	})
	.then(() => console.log('Database is connected successfully...👍'))
	.catch(err => console.log('Connection Failed..😢 ', err))

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, 'images')
	},
	filename: (req, file, callback) => {
		callback(null, req.body.name) // hello.jpg
	},
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
	res.status(200).json('File has been uploaded')
})

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/api/categories', categoriesRoute)
app.use('/api/comments', commentsRoute)

const port = 2506
app.listen(port, () => {
	console.log(`Server is running...🔥 on port ${port}..🚀`)
})
