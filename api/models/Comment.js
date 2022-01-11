const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
	{
		comment: {
			type: String,
			required: true,
		},
		postId: {
			type: String,
			required: true,
		},
		postUserId: {
			type: String,
			required: true,
		},
		commentedUserId: {
			type: String,
			required: true,
		},
		commentedUsername: {
			type: String,
			required: true,
		},
		commentedUserProfile: {
			type: String,
			required: false,
			default: 'avatar.jpg',
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Comment', CommentSchema)
