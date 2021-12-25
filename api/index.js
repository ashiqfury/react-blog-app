const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const postsRoute = require('./routes/posts')

dotenv.config()

app.use(express.json())

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
	})
	.then(() => console.log('Database is connected successfully...👍'))
	.catch(err => console.log('Connection Failed..😢 ', err))

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)

const port = 2506
app.listen(port, () => {
	console.log(`Server is running...🔥 on port ${port}..🚀`)
})
