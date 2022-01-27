import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import avatar from '../assets/avatar.jpg'
import { retriveTheme, saveTheme } from '../localStorage'
import { gsap } from 'gsap'

const Topbar = () => {
	const { user, dispatch } = useContext(Context)
	const [dark, setDark] = useState(false)

	const PF = 'http://localhost:2506/images/'

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' })
		window.location.replace('/login')
	}

	useEffect(() => {
		gsap.from('.topbar', { y: '-100%', duration: 0.5, ease: 'ease-out' })
		gsap.from('.topbar__left', {
			y: '-30',
			duration: 1,
			ease: 'ease-out',
			opacity: 0,
			delay: 0.5,
		})
		gsap.from('.topbar__right', {
			y: '-30',
			duration: 1,
			ease: 'ease-out',
			opacity: 0,
			delay: 0.5,
		})
	}, [])

	useEffect(() => retriveTheme(setDark), [])

	useEffect(() => {
		document.body.classList.toggle('dark')
		dark ? document.body.classList.add('dark') : document.body.classList.remove('dark')
		saveTheme(dark)
	}, [dark])

	return (
		<div className="topbar">
			<div className="topbar__left">
				<Link to="/" className="link">
					<span className="topbar__logo">
						<span className="topbar__logo--sm">F</span>
						<span className="topbar__logo--lg">ury Blogz.</span>
					</span>
				</Link>
			</div>
			<div className="topbar__center">
				<ul className="topbar__list list">
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
					<li className="topbar__list--item">
						<Link to="/contact" className="link">
							CONTACT
						</Link>
					</li>
					<li className="topbar__list--item">
						<Link to="/about" className="link">
							ABOUT
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
								<img className="topbar__img" src={avatar} alt="" />
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
				<button className="topbar__btn" onClick={() => setDark(!dark)}>
					{dark ? (
						<i className="topbar__icon--theme fas fa-sun"></i>
					) : (
						<i className="topbar__icon--theme fas fa-moon"></i>
					)}
				</button>
			</div>
		</div>
	)
}

export default Topbar
