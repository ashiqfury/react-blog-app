import { useState, useEffect, useContext, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import html2canvas from 'html2canvas'

import { Context } from '../context/Context'
import { animation } from '../animations/single'
import { Comments, LoadingIndicator } from '../includes/components'
import { PF } from '../utils'

const SinglePost = () => {
	const location = useLocation()
	const path = location.pathname.split('/')[2]

	const [post, setPost] = useState({})

	const { user } = useContext(Context)
	const elementRef = useRef()

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
			toast.success('Post deleted Successful!', { position: 'bottom-center', className: 'toast' })
			window.location.replace('/')
		} catch (err) {
			toast.error('Post delete failed!', { position: 'bottom-center', className: 'toast' })
		}
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
			toast.success('Update Successful!', { position: 'bottom-center', className: 'toast' })
		} catch (err) {
			toast.error('Update failed!', { position: 'bottom-center', className: 'toast' })
		}
	}

	function downloadCanvas(element) {
		html2canvas(element, { useCORS: true })
			.then(canvas => {
				var link = document.createElement('a')
				document.body.appendChild(link)
				link.download = 'html_image.jpg'
				link.href = canvas.toDataURL()
				link.target = '_blank'
				link.click()
				toast.success('Post download successful!', {
					position: 'bottom-center',
					className: 'toast',
				})
			})
			.catch(err =>
				toast.error('Post download failed!', { position: 'bottom-center', className: 'toast' })
			)
	}

	useEffect(() => {
		animation()
	}, [])

	return (
		<div className="singlePost">
			<Toaster />
			{post ? (
				<div className="singlePost__wrapper" ref={elementRef}>
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
							<div className="singlePost__edit" hidden={hidden}>
								<i
									className="singlePost__icon fa-solid fa-download"
									onClick={() => downloadCanvas(elementRef.current)}
								></i>
								{(post.userId === user?._id || user?.admin) && (
									<>
										<i
											className="singlePost__icon far fa-edit"
											onClick={() => setUpdateMode(true)}
										></i>
										<i className="singlePost__icon far fa-trash-alt" onClick={handleDelete}></i>
									</>
								)}
							</div>
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
			) : (
				<LoadingIndicator />
			)}
		</div>
	)
}

export default SinglePost
