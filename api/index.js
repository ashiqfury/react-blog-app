const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
	})
	.then(() => console.log('Database is connected successfully...👍'))
	.catch(err => console.log('Connection Failed..😢', err))

app.listen(2506, () => {
	console.log('Server is running...🔥')
})
