import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'

const App = () => {
	return (
		<div>
			<Topbar />
			{/* <Home /> */}
			{/* <Single /> */}
			{/* <Write /> */}
			{/* <Settings /> */}
			<Login />
		</div>
	)
}

export default App
