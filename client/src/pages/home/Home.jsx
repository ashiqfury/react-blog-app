import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				<Sidebar />
			</div>
		</>
	)
}

export default Home
