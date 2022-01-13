import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import avatar from '../assets/avatar.jpg'
import { Context } from '../context/Context'

const SidebarUsers = () => {
	const context = useContext(Context)
	const [cats, setCats] = useState([])
	const [users, setUsers] = useState([])
	const [user, setUser] = useState({})
	const PF = 'http://localhost:2506/images/'
	const { search } = useLocation()
	const ID = search.split('=')[1]

	useEffect(() => {
		const getUser = async () => {
			const res = await axios.get(`/users/${ID}`)
			setUser(res.data)
		}
		getUser()
	}, [ID])

	useEffect(() => {
		let list = []
		const getPosts = async () => {
			const res = await axios.get('/posts')
			await res.data.map(p => p.categories.map(cat => list.push(cat)))
			list = [...new Set(list)] // remove duplicates
			list = (list.length > 6 && list.slice(0, 6)) || list // slice when list greater than 6
			setCats(list)
		}
		getPosts()
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

	const deleteUser = async () => {
		try {
			await axios.delete(`/users/${ID}`, {
				data: { userId: context.user._id, admin: context.user.admin },
			})
			window.location.replace('/')
		} catch (err) {}
	}

	return (
		<div className="sidebar">
			<div className="sidebar__item">
				<span className="sidebar__title">ABOUT ME</span>
				{user?.profilePic ? (
					<img className="sidebar__img" src={PF + user?.profilePic} alt="Avatar" />
				) : (
					<img className="sidebar__img" src={avatar} alt="Avatar" />
				)}
				<span className="sidebar__name">{user?.name}</span>
				<p className="sidebar__bio">{user?.bio}</p>
			</div>
			<div className="sidebar__item">
				<span className="sidebar__title">CATEGORIES</span>
				<ul className="sidebar__list">
					{cats.map(c => (
						<Link to={`/?cat=${c}`} className="sidebar__list--item category link" key={c}>
							<li className="cat">{c}</li>
						</Link>
					))}
				</ul>
			</div>

			<div className="sidebar__item">
				<span className="sidebar__title">USERS</span>
				<ul className="sidebar__list">
					{users.map(u => (
						<Link to={`/?userId=${u._id}`} className="link sidebar__list--item" key={u.username}>
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
				{(user?.facebook || user?.instagram || user?.twitter) && (
					<>
						<span className="sidebar__title">FOLLOW US</span>
						<div className="sidebar__social">
							{user?.facebook && (
								<a
									href={`https://facebook.com/${user?.facebook}`}
									target="_blank"
									rel="noreferrer"
									className="link"
								>
									<i className="sidebar__icon fab fa-facebook-square"></i>
								</a>
							)}
							{user?.instagram && (
								<a
									href={`https://instagram.com/${user?.instagram}`}
									target="_blank"
									rel="noreferrer"
									className="link"
								>
									<i className="sidebar__icon fab fa-instagram-square"></i>
								</a>
							)}
							{user?.twitter && (
								<a
									href={`https://twitter.com/${user?.twitter}`}
									target="_blank"
									rel="noreferrer"
									className="link"
								>
									<i className="sidebar__icon fab fa-twitter-square"></i>
								</a>
							)}
						</div>
					</>
				)}
			</div>

			{context.user.admin && context.user._id !== user._id && (
				<div className="sidebar__item">
					<button className="sidebar__item--delete" onClick={deleteUser}>
						Delete User
					</button>
				</div>
			)}
		</div>
	)
}

export default SidebarUsers
