const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// REGISTER
router.post('/register', async (req, res) => {
	try {
		if (await User.findOne({ username: req.body.username })) {
			res.status(400).json('Username already exists!')
			return
		}

		if (await User.findOne({ email: req.body.email })) {
			res.status(400).json('Email already exists!')
			return
		}

		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(req.body.password, salt)
		const newUser = await new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		})

		const user = await newUser.save()
		res.status(200).json(user)
	} catch (err) {
		res.status(500).json(err)
	}
})

// LOGIN
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username })

		if (!user) {
			res.status(400).json('User not exists!')
			return
		} else {
			const validated = await bcrypt.compare(req.body.password, user.password)
			if (user && !validated) {
				res.status(400).json('Password is incorrect!')
				return
			}
		}

		const { password, ...others } = user._doc

		res.status(200).json(others)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
