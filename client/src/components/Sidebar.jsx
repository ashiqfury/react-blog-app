import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import avatar from '../assets/avatar.jpg'

const Sidebar = () => {
	const [cats, setCats] = useState([])
	const [users, setUsers] = useState([])
	const { user } = useContext(Context)
	console.log(users)
	const PF = 'http://localhost:2506/images/'

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get('/categories')
			setCats(res.data)
		}
		getCats()
	}, [])

	useEffect(() => {
		const getUsers = async () => {
			const res = await axios.get('/users')
			const data = res.data
			const filteredUser = data.filter(u => u._id !== user?._id)
			setUsers(filteredUser)
		}
		getUsers()
	}, [user?._id])

	return (
		<div className="sidebar">
			<div className="sidebar__item">
				<span className="sidebar__title">ABOUT ME</span>
				<img className="sidebar__img" src={user?.profilePic || avatar} alt="Avatar" />
				<p className="sidebar__bio">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime doloremque saepe qui,
					molestias delectus necessitatibus dignissimos ut nam.
				</p>
			</div>
			<div className="sidebar__item">
				<span className="sidebar__title">CATEGORIES</span>
				<ul className="sidebar__list">
					{cats.map(c => (
						<Link to={`/?cat=${c.name}`} className="sidebar__list--item category link" key={c.name}>
							<li className="">{c.name}</li>
						</Link>
					))}
				</ul>
			</div>

			<div className="sidebar__item">
				<span className="sidebar__title">USERS</span>
				<ul className="sidebar__list">
					{users.map(u => (
						<Link to={`/?user=${u.username}`} className="link sidebar__list--item" key={u.username}>
							{u?.profilePic ? (
								<img src={PF + u.profilePic} alt="Profile" className="sidebar__list--img" />
							) : (
								<img src={avatar} alt="Profile" className="sidebar__list--img" />
							)}

							<li className="sidebar__list--name">{u.username}</li>
						</Link>
					))}
				</ul>
			</div>

			<div className="sidebar__item">
				<span className="sidebar__title">FOLLOW US</span>
				<div className="sidebar__social">
					<i className="sidebar__icon fab fa-facebook-square"></i>
					<i className="sidebar__icon fab fa-twitter-square"></i>
					<i className="sidebar__icon fab fa-pinterest-square"></i>
					<i className="sidebar__icon fab fa-instagram-square"></i>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
