import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../context/Context'

const Comment = ({ comment }) => {
	const PF = 'http://localhost:2506/images/'
	const { user } = useContext(Context)

	const handleDelete = async () => {
		try {
			await axios.delete(`/comments/${comment._id}`).then(() => window.location.reload())
		} catch (err) {
			console.log(err)
		}
	}

	console.log(comment)

	return (
		<div className="comment">
			<div className="comment__info">
				<div className="comment__info--left">
					<img src={PF + comment.commentedUserProfile} alt="" />
					<span>{comment.commentedUsername}</span>
				</div>
				<div className="comment__info--right">
					<span>{new Date(comment.createdAt).toDateString()}</span>
					<i className="comment__icon far fa-edit edit"></i>
					{(comment.postUserId === user?._id ||
						comment.commentedUserId === user?._id ||
						user?.admin) && (
						<i className="comment__icon far fa-trash-alt delete" onClick={handleDelete}></i>
					)}
				</div>
			</div>
			<p>{comment.comment}</p>
		</div>
	)
}

export default Comment
