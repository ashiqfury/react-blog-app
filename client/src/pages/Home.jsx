import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../context/Context'
import SidebarUsers from '../components/SidebarUsers'
import Footer from '../components/Footer'
import LoadingIndicator from '../components/LoadingIndicator'

const Home = () => {
	const [posts, setPosts] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	const { user } = useContext(Context)

	const { search } = useLocation()

	useEffect(() => {
		const fetchPosts = async () => {
			setIsFetching(true)
			await axios.get(`/posts/${search}`).then(res => {
				setPosts(res.data)
				setIsFetching(false)
			})
		}
		fetchPosts()
	}, [search])

	return (
		<>
			<Header />
			<div className="home" id="home">
				{isFetching ? <LoadingIndicator /> : <Posts posts={posts} />}
				{user && <>{search.includes('userId') ? <SidebarUsers /> : <Sidebar />}</>}
			</div>
			<Footer />
		</>
	)
}

export default Home
