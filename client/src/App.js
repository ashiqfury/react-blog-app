import Topbar from './components/Topbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Single from './pages/Single'
import Write from './pages/Write'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from './context/Context'
import '../src/scss/style.scss'
import Contact from './pages/Contact'
import NotFound404 from './pages/NotFound404'

const App = () => {
	const { user } = useContext(Context)

	return (
		<Router>
			<Topbar />
			<Switch>
				<Route path="/" exact>
					<Home />
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
				<Route path="*">
					<NotFound404 />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
