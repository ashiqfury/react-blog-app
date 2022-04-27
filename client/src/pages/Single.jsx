import { useContext } from 'react'

import { Sidebar, SinglePost } from '../includes/components'
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
