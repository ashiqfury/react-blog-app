import { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../context/Context'

const SinglePost = () => {
	const location = useLocation()
	const path = location.pathname.split('/')[2]

	const [post, setPost] = useState({})
	const PF = 'http://localhost:2506/images/'

	const { user } = useContext(Context)

	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [updateMode, setUpdateMode] = useState(false)

	useEffect(() => {
		const getPost = async () => {
			try {
				const res = await axios.get(`/posts/${path}`)
				setPost(res.data)
				setTitle(res.data.title)
				setDesc(res.data.desc)
			} catch (err) {}
		}
		getPost()
	}, [path])

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${path}`, {
				data: { username: user.username, userId: user._id, admin: user.admin },
			})
			window.location.replace('/')
		} catch (err) {}
	}

	const handleUpdate = async () => {
		setUpdateMode(false)
		try {
			await axios.put(`/posts/${path}`, {
				username: user.username,
				title,
				desc,
				userId: user._id,
				admin: user.admin,
			})
		} catch (err) {}
	}

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && <img src={PF + post.photo} alt="" className="singlePostImg" />}

				{updateMode ? (
					<input
						type="text"
						className="singlePostTitleInput"
						value={title}
						autoFocus
						onChange={e => setTitle(e.target.value)}
					/>
				) : (
					<h1 className="singlePostTitle">
						{title}
						{(post.userId === user?._id || user?.admin) && (
							<div className="singlePostEdit">
								<i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
								<i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
							</div>
						)}
					</h1>
				)}
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author:
						<Link to={`/?user=${post.username}`} className="link">
							<strong> {post.username}</strong>
						</Link>
					</span>
					<span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
				</div>
				{updateMode ? (
					<textarea
						value={desc}
						className="singlePostDescInput"
						onChange={e => setDesc(e.target.value)}
					/>
				) : (
					<p className="singlePostDesc">{desc}</p>
				)}
				{updateMode && (
					<button className="singlePostButton" onClick={handleUpdate}>
						Update
					</button>
				)}
			</div>
		</div>
	)
}

export default SinglePost
