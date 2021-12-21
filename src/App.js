import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
	return (
		<Router>
			<Topbar />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/post/:postId">
					<Single />
				</Route>
				<Route path="/write">
					<Write />
				</Route>
				<Route path="/settings">
					<Settings />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
