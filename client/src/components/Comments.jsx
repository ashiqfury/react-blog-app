import axios from 'axios'
import { useContext, useState } from 'react'
import { Context } from '../context/Context'
import Comment from './Comment'

const Comments = ({ post, path }) => {
	const { user } = useContext(Context)
	const [comment, setComment] = useState('')
	const comments = post.comments

	const handleUpdate = async () => {
		const commentObject = {
			comment,
			commentId: Math.random(),
			commentedUserId: user._id,
			postUserId: post.userId,
			created: new Date().toDateString(),
		}

		try {
			await axios
				.put(`/posts/comment/${path}`, {
					comments: [...comments, commentObject],
					userId: user._id,
				})
				.then(() => window.location.reload())
		} catch (err) {}
	}

	return (
		<div className="comments">
			<span className="comments__title">Comments: </span>
			<textarea
				className="comments__input"
				placeholder="Type your comments..."
				onChange={e => setComment(e.target.value)}
			></textarea>
			<button className="comments__button" onClick={handleUpdate}>
				Submit
			</button>
			<div className="comment__wrapper">
				{comments?.length !== 0 &&
					comments?.map(comment => <Comment key={comment.commentId} comment={comment} />)}
			</div>
		</div>
	)
}

export default Comments
