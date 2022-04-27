import fury from '../assets/fury.jpg'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import sass from '../assets/sass.png'
import redux from '../assets/redux.png'
import git from '../assets/git.png'
import github from '../assets/github.png'

export { fury, react, node, express, mongo, sass, redux, git, github }

// returns images object for production.
const importAll = r => {
	let images = {}
	r.keys().forEach((item, index) => {
		images[item.replace('./', '')] = r(item)
	})
	return images
}
importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/))
// const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/))

// you can access these images as => fury = images['fury.jpg']
