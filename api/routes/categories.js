const router = require('express').Router()
const Category = require('../models/Category')

// CREATE CATEGORY
router.post('/', async (req, res) => {
	try {
		const newCat = await new Category(req.body)
		const savedCat = await newCat.save()
		res.status(200).json(savedCat)
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET ALL CATEGORY
router.get('/', async (req, res) => {
	try {
		const cats = await Category.find()
		res.status(200).json(cats)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
