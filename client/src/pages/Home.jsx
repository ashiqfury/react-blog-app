import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../context/Context'
import SidebarUsers from '../components/SidebarUsers'
import Footer from '../components/Footer'

const Home = ({ dark }) => {
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
			<Header dark={dark} />
			<div className="home" id="home">
				<Posts posts={posts} />
				{user && <>{search.includes('userId') ? <SidebarUsers /> : <Sidebar />}</>}
			</div>
			<Footer />
		</>
	)
}

export default Home
