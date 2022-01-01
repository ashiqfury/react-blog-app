import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../context/Context'

const Home = () => {
	const [posts, setPosts] = useState([])
	const { user } = useContext(Context)

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
				{user && <Sidebar />}
			</div>
		</>
	)
}

export default Home
