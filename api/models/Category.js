const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		// categories: {
		// 	type: Array,
		// 	required: false,
		// 	default: [],
		// },
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Category', CategorySchema)
