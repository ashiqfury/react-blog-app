import { useContext, useEffect, useState } from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'

import { Context } from '../context/Context'
import { retriveTheme, saveTheme } from '../localStorage'
import { topbar, topbar__element } from '../animations/topbar'
import avatar from '../assets/avatar.jpg'

const Topbar = () => {
	const { user, dispatch } = useContext(Context)
	const [dark, setDark] = useState(false)

	const history = useHistory()
	const location = useLocation()

	const PF = 'http://localhost:2506/images/'

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' })
		history.replace('/login')
	}

	useEffect(() => {
		topbar()
		topbar__element('left')
		topbar__element('right')
	}, [])

	useEffect(() => {
		;[...document.querySelectorAll('.topbar__list--item')].forEach(item => {
			item.classList.remove('active')
			item.classList.contains(location.pathname) && item.classList.add('active')
		})
	}, [location.pathname])

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
					<li className="topbar__list--item /" onClick={() => history.push('/')}>
						HOME
					</li>
					<li className="topbar__list--item /write" onClick={() => history.push('/write')}>
						WRITE
					</li>
					<li className="topbar__list--item /contact" onClick={() => history.push('/contact')}>
						CONTACT
					</li>
					<li className="topbar__list--item /about" onClick={() => history.push('/about')}>
						ABOUT
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
								<img className="topbar__img" src={PF + user.profilePic} alt="" crossOrigin="true" />
							) : (
								<img className="topbar__img" src={avatar} alt="" crossOrigin="true" />
							)}
						</Link>
						<Link to="/settings" className="link">
							<span className="topbar__username">{user.username}</span>
						</Link>
					</>
				) : (
					<ul className="topbar__list">
						<li className="topbar__list--item" onClick={() => history.push('/login')}>
							LOGIN
						</li>
						<li className="topbar__list--item" onClick={() => history.push('/register')}>
							REGISTER
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
