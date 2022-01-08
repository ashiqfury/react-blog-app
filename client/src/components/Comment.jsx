// import { axios } from 'axios'
// import { useEffect, useState } from 'react'

const Comment = ({ comment }) => {
	// const [commentedUser, setCommentedUser] = useState({})
	// const { commentedUserId } = comment

	// useEffect(() => {
	// 	const getCommentedUser = async () => {
	// 		try {
	// 			const res = await axios.get(`/users/${commentedUserId}`)
	// 			setCommentedUser(res.data)
	// 		} catch (err) {}
	// 	}
	// 	getCommentedUser()
	// }, [commentedUserId, commentedUser])

	return (
		<div className="comment">
			<p>{comment.comment}</p>
		</div>
	)
}

export default Comment
