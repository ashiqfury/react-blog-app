import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import Comment from './Comment'
import toast, { Toaster } from 'react-hot-toast'

const Comments = ({ post, path }) => {
	const { user } = useContext(Context)
	const [comment, setComment] = useState('') // for posting a new comment
	const [comments, setComments] = useState([]) // storing all fetched comments

	useEffect(() => {
		const getComments = async () => {
			try {
				const res = await axios.get(`/comments/${path}`)
				setComments(res.data)
			} catch (err) {
				console.log(err)
			}
		}
		getComments()
	}, [path])

	const handleSubmit = async () => {
		try {
			await axios
				.post('/comments/', {
					comment,
					postId: post._id,
					postUserId: post.userId,
					commentedUserId: user._id,
					commentedUsername: user.username,
					commentedUserProfile: user.profilePic,
				})
				.then(() => window.location.reload())
			toast.success('Comment posted Successful!', { position: 'bottom-center', className: 'toast' })
		} catch (err) {
			toast.error('Comment posting failed!', { position: 'bottom-center', className: 'toast' })
		}
	}

	return (
		<div className="comments">
			<Toaster />
			{(comments?.length !== 0 || (user?._id !== post.userId && user !== null)) && (
				<span className="comments__title">Comments: </span>
			)}
			{user?._id !== post.userId && user !== null && (
				<div className="comments__input__wrapper">
					<textarea
						className="comments__input"
						placeholder="Type your comments..."
						onChange={e => setComment(e.target.value)}
					></textarea>
					<button className="comments__button" onClick={handleSubmit}>
						<i className="comments__button--icon fas fa-check"></i>
					</button>
				</div>
			)}
			<div className="comment__wrapper">
				{comments?.length !== 0 &&
					comments
						?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
						?.map(comment => <Comment key={comment._id} comment={comment} />)}
			</div>
		</div>
	)
}

export default Comments
