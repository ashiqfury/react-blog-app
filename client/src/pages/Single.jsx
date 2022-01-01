import { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import SinglePost from '../components/SinglePost'
import { Context } from '../context/Context'

const Single = () => {
	const { user } = useContext(Context)

	return (
		<div className="single">
			<SinglePost />
			{user && <Sidebar />}
		</div>
	)
}

export default Single
