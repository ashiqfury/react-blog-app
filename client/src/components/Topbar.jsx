import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import avatar from '../assets/avatar.jpg'

const Topbar = () => {
	const { user, dispatch } = useContext(Context)
	const PF = 'http://localhost:2506/images/'

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' })
		window.location.replace('/login')
	}

	return (
		<div className="topbar">
			<div className="topbar__left">
				<Link to="/" className="link">
					<span className="topbar__logo">
						<span className="topbar__logo--sm">F</span>
						<span className="topbar__logo--lg">ury Blogz.</span>
					</span>
				</Link>
				{/* <i className="topbar__icon fab fa-facebook-square"></i>
				<i className="topbar__icon fab fa-twitter-square"></i>
				<i className="topbar__icon fab fa-pinterest-square"></i>
				<i className="topbar__icon fab fa-instagram-square"></i> */}
			</div>
			<div className="topbar__center">
				<ul className="topbar__list">
					<li className="topbar__list--item">
						<Link to="/" className="link">
							HOME
						</Link>
					</li>
					<li className="topbar__list--item">
						<Link to="/write" className="link">
							WRITE
						</Link>
					</li>
					<li className="topbar__list--item disabled">
						<Link to="/" className="link">
							ABOUT
						</Link>
					</li>
					<li className="topbar__list--item">
						<Link to="/contact" className="link">
							CONTACT
						</Link>
					</li>
					<li className="topbar__list--item" onClick={handleLogout}>
						{user && 'LOGOUT'}
					</li>
				</ul>
			</div>
			<div className="topbar__right">
				{user ? (
					<>
						<Link to="/settings" className="link">
							{user.profilePic ? (
								<img className="topbar__img" src={PF + user.profilePic} alt="" />
							) : (
								<img
									className="topbar__img"
									// src={'http://localhost:2506/images/avatar.jpg'}
									src={avatar}
									alt=""
								/>
							)}
						</Link>
						<Link to="/settings" className="link">
							<span className="topbar__username">{user.username}</span>
						</Link>
					</>
				) : (
					<ul className="topbar__list">
						<li className="topbar__list--item">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topbar__list--item">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}
				<i className="topbar__icon--theme fas fa-moon"></i>
				<i className="topbar__icon--theme fas fa-sun hidden"></i>
			</div>
		</div>
	)
}

export default Topbar
