import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Context } from '../context/Context'
import { animation } from '../animations/sidebar'
import avatar from '../assets/avatar.jpg'
import { PF } from '../utils'

const Sidebar = () => {
	const [cats, setCats] = useState([])
	const [users, setUsers] = useState([])
	const { user } = useContext(Context)

	useEffect(() => {
		let list = []
		const getPosts = async () => {
			const res = await axios.get('/posts')
			await res.data.map(p => p.categories.map(cat => list.push(cat)))
			list = [...new Set(list)].reverse() // remove duplicates
			list = (list.length > 6 && list.slice(0, 8)) || list // slice when list greater than 6
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

	useEffect(() => {
		animation()
	}, [])

	return (
		<div className="sidebar">
			<div className="sidebar__item">
				<span className="sidebar__title author">ABOUT ME</span>
				{user?.profilePic ? (
					<img
						className="sidebar__img"
						src={PF + user?.profilePic}
						alt="Avatar"
						crossOrigin="true"
					/>
				) : (
					<img className="sidebar__img" src={avatar} alt="Avatar" crossOrigin="true" />
				)}
				<span className="sidebar__name">{user?.name}</span>
				<p className="sidebar__bio">{user?.bio}</p>
			</div>
			{cats.length !== 0 && (
				<div className="sidebar__item">
					<span className="sidebar__title cats">CATEGORIES</span>
					<ul className="sidebar__list cats">
						{cats.map(c => (
							<Link to={`/?cat=${c}`} className="sidebar__list--item category link" key={c}>
								<li className="cat">{c}</li>
							</Link>
						))}
					</ul>
				</div>
			)}
			{users.length !== 0 && (
				<div className="sidebar__item">
					<span className="sidebar__title users">USERS</span>
					<ul className="sidebar__list users">
						{users.map(u => (
							<Link to={`/?userId=${u._id}`} className="link sidebar__list--item" key={u.username}>
								{u?.profilePic ? (
									<img
										src={PF + u.profilePic}
										alt="Profile"
										className="sidebar__list--img"
										crossOrigin="true"
									/>
								) : (
									<img
										src={avatar}
										alt="Profile"
										className="sidebar__list--img"
										crossOrigin="true"
									/>
								)}

								<li className="sidebar__list--name">
									{u.admin === true ? (
										<>
											{u.username} <i className="sidebar__admin fas fa-crown"></i>
										</>
									) : (
										<>{u.username}</>
									)}
								</li>
							</Link>
						))}
					</ul>
				</div>
			)}
			<div className="sidebar__item">
				{(user?.facebook || user?.instagram || user?.twitter) && (
					<>
						<span className="sidebar__title social">FOLLOW US</span>
						<div className="sidebar__social social">
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
		</div>
	)
}

export default Sidebar
