import Topbar from './components/Topbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Single from './pages/Single'
import Write from './pages/Write'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Context } from './context/Context'
import '../src/scss/style.scss'
import Contact from './pages/Contact'
import NotFound404 from './pages/NotFound404'
import About from './pages/About'
import { retriveTheme, saveTheme } from './localStorage'

const App = () => {
	const { user } = useContext(Context)
	const [dark, setDark] = useState(false)

	useEffect(() => {
		retriveTheme(setDark)
	}, [])

	useEffect(() => {
		document.body.classList.toggle('dark')
		dark ? document.body.classList.add('dark') : document.body.classList.remove('dark')
		saveTheme(dark)
	}, [dark])

	return (
		<Router>
			<Topbar dark={dark} setDark={setDark} />
			<Switch>
				<Route path="/" exact>
					<Home dark={dark} />
				</Route>
				<Route path="/register">{user ? <Home /> : <Register />}</Route>
				<Route path="/login">{user ? <Home /> : <Login />}</Route>
				<Route path="/write">{user ? <Write /> : <Register />}</Route>
				<Route path="/settings">{user ? <Settings /> : <Register />}</Route>
				<Route path="/post/:postId">
					<Single />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="*">
					<NotFound404 />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
