import { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Context } from './context/Context'

import Topbar from './components/Topbar'
import { Home, Login, Register, Settings, Single, Write, About, Contact } from './includes/pages'
import { NotFound404 } from './includes/pages'
import '../src/scss/style.scss'

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
