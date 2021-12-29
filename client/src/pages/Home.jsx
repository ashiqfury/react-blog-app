import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
	const [posts, setPosts] = useState([])

	const { search } = useLocation()

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get(`/posts/${search}`)
			setPosts(res.data)
		}
		fetchPosts()
	}, [search])

	return (
		<>
			<Header />
			<div className="home">
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	)
}

export default Home
