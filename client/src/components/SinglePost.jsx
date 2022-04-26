import { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../context/Context'
import Comments from './Comments'
import { animation } from '../animations/single'

const SinglePost = () => {
	const location = useLocation()
	const path = location.pathname.split('/')[2]

	const [post, setPost] = useState({})
	const PF = 'http://localhost:2506/images/'

	const { user } = useContext(Context)

	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [cats, setCats] = useState([])
	const [catsString, setCatsString] = useState('')
	const [updateMode, setUpdateMode] = useState(false)
	const [hidden, setHidden] = useState(true)

	useEffect(() => {
		const getPost = async () => {
			try {
				const res = await axios.get(`/posts/${path}`)
				setPost(res.data)
				setTitle(res.data.title)
				setDesc(res.data.desc)
				setCats(res.data.categories)
				setCatsString(res.data.categories.toString())
			} catch (err) {}
		}
		getPost()
		user ? setHidden(false) : setHidden(true)
	}, [path, user])

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
		const categories = catsString
			.trim()
			.toLowerCase()
			.split(/\W/)
			.filter(c => c)
		setCats(categories)
		try {
			await axios.put(`/posts/${path}`, {
				title,
				desc,
				categories,
				userId: user._id,
				admin: user.admin,
			})
		} catch (err) {}
	}

	useEffect(() => {
		animation()
	}, [])

	return (
		<div className="singlePost">
			<div className="singlePost__wrapper">
				{post.photo && (
					<img src={PF + post.photo} alt="" className="singlePost__img" crossOrigin="true" />
				)}

				{updateMode ? (
					<input
						type="text"
						className="singlePost__title--input"
						value={title}
						autoFocus
						onChange={e => setTitle(e.target.value)}
					/>
				) : (
					<h1 className="singlePost__title">
						{title}
						{(post.userId === user?._id || user?.admin) && (
							<div className="singlePost__edit" hidden={hidden}>
								<i className="singlePost__icon far fa-edit" onClick={() => setUpdateMode(true)}></i>
								<i className="singlePost__icon far fa-trash-alt" onClick={handleDelete}></i>
							</div>
						)}
					</h1>
				)}
				<div className="singlePost__info">
					<span className="singlePost__author">
						Author:
						<Link to={`/?userId=${post.userId}`} className="link">
							<strong> {post.username}</strong>
						</Link>
					</span>
					<span className="singlePost__date">{new Date(post.createdAt).toDateString()}</span>
				</div>
				<div className="singlePost__info">
					<div className="singlePost__categories">
						{(cats.length !== 0 || updateMode) && <span>Categories: </span>}
						{updateMode ? (
							<input
								type="text"
								className="singlePost__cats--input"
								value={catsString}
								onChange={e => setCatsString(e.target.value)}
							/>
						) : (
							<>
								{cats.length !== 0 && (
									<>
										{cats.map(c => (
											<Link to={`/?cat=${c}`} key={c} className="link">
												<strong>{`${c} `}&nbsp;</strong>
											</Link>
										))}
									</>
								)}
							</>
						)}
					</div>
				</div>
				{updateMode ? (
					<textarea
						value={desc}
						className="singlePost__desc--input"
						onChange={e => setDesc(e.target.value)}
					/>
				) : (
					<p className="singlePost__desc">{desc}</p>
				)}
				{updateMode && (
					<button className="singlePost__button" onClick={handleUpdate}>
						Update
					</button>
				)}
				<Comments post={post} path={path} />
			</div>
		</div>
	)
}

export default SinglePost
