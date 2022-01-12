const router = require('express').Router()
const Comment = require('../models/Comment')

// CREATE A COMMENT :id => post ID
router.post('/', async (req, res) => {
	const newComment = await Comment(req.body)
	try {
		const savedComment = await newComment.save()
		res.status(200).json(savedComment)
	} catch (err) {
		res.status(500).json(err)
	}
})

// UPDATE A COMMENT :id => comment ID
router.put('/:id', async (req, res) => {
	try {
		const updatedComment = await Comment.findByIdAndUpdate(
			req.params.id,
			{
				$set: {
					comment: req.body.comment,
				},
			},
			{ new: true }
		)
		res.status(200).json(updatedComment)
	} catch (err) {
		res.status(500).json(err)
	}
})

// DELETE A COMMENT
router.delete('/:id', async (req, res) => {
	try {
		const comment = await Comment.findById(req.params.id)
		try {
			await comment.delete()
			res.status(200).json('Post has been deleted')
		} catch (err) {
			res.status(500).json(err)
		}
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET ALL COMMENTS
router.get('/', async (req, res) => {
	try {
		const comments = await Comment.find()
		res.status(200).json(comments)
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET A PARTICULAR POST'S COMMENTS :id => post ID
router.get('/:id', async (req, res) => {
	try {
		const comments = await Comment.find({ postId: req.params.id })
		res.status(200).json(comments)
	} catch (err) {
		res.status(500).json(err)
	}
})

// DELETE A PARTICULAR POST'S COMMENTS :id => post ID
router.get('/:id', async (req, res) => {
	try {
		const comments = await Comment.deleteMany({ postId: req.params.id })
		res.status(200).json(comments)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
