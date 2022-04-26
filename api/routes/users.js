const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const bcrypt = require('bcrypt')

// UPDATE
router.put('/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10)
			req.body.password = await bcrypt.hash(req.body.password, salt)
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			)
			if (req.body.username) {
				try {
					console.log('id: ', req.params.id)
					console.log('username: ', req.body.username)
					await Post.updateMany(
						{ userId: req.params.id },
						{
							$set: { username: req.body.username },
						},
						{ new: true }
					)
					await Comment.updateMany(
						{ commentedUserId: req.params.id },
						{
							$set: { commentedUsername: req.body.username },
						},
						{ new: true }
					)
					console.log('updated username in posts and comments')
				} catch (err) {
					res.status(500).json('Posts are not updated!')
				}
			}
			res.status(200).json(updatedUser)
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(401).json('You can only update your account!')
	}
})

// DELETE
router.delete('/:id', async (req, res) => {
	if (req.body.userId === req.params.id || req.body.admin) {
		try {
			const user = await User.findById(req.params.id)
			try {
				await Post.deleteMany({ userId: user._id })
				await Comment.deleteMany({ commentedUserId: user._id })
				await User.findByIdAndDelete(req.params.id)
				res.status(200).json('User had been deleted!')
			} catch (err) {
				res.status(500).json(err)
			}
		} catch (err) {
			res.status(404).json('User not found!')
		}
	} else {
		res.status(401).json('You can only delete your account!')
	}
})

// GET USER
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		if (!user) {
			res.status(404).json('User not found!')
			return
		}
		const { password, ...others } = user._doc
		res.status(200).json(others)
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET ALL USER
router.get('/', async (req, res) => {
	try {
		const users = await User.find()
		res.status(200).json(users)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
