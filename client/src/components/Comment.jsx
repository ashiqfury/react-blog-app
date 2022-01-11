// import { axios } from 'axios'
// import { useEffect, useState } from 'react'

const Comment = ({ comment }) => {
	const PF = 'http://localhost:2506/images/'
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
			<div className="comment__info">
				<div className="comment__info--left">
					<img src={PF + comment?.userProfile} alt="" />
					<span>{comment?.username}</span>
				</div>
				<div className="comment__info--right">
					<span>{comment?.created}</span>
					<i className="comment__icon far fa-edit"></i>
					<i className="comment__icon far fa-trash-alt"></i>
				</div>
			</div>
			<p>{comment.comment}</p>
		</div>
	)
}

export default Comment
