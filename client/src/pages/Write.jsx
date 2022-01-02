import axios from 'axios'
import { useContext, useState } from 'react'
import { Context } from '../context/Context'

const Write = () => {
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [file, setFile] = useState(null)
	const { user } = useContext(Context)

	const handleSubmit = async e => {
		e.preventDefault()
		const newPost = {
			username: user.username,
			userId: user._id,
			title,
			desc,
		}
		if (file) {
			const data = new FormData()
			const filename = Date.now() + file.name
			data.append('name', filename)
			data.append('file', file)
			newPost.photo = filename
			try {
				await axios.post('/upload', data)
			} catch (err) {}
		}
		try {
			const res = await axios.post('/posts', newPost)
			window.location.replace(`/post/${res.data._id}`)
		} catch (err) {}
	}

	return (
		<div className="write">
			<h3 className="write__heading">Create a new post</h3>
			{file && <img src={URL.createObjectURL(file)} alt="Post" className="write__img" />}
			<form className="write__form" onSubmit={handleSubmit}>
				<div className="write__form--group">
					<label htmlFor="fileInput">
						<i className=" write__icon fas fa-plus"></i>
					</label>
					<input
						type="file"
						id="fileInput"
						style={{ display: 'none' }}
						onChange={e => setFile(e.target.files[0])}
					/>
					<input
						type="text"
						placeholder="Title"
						className="write__input"
						onChange={e => setTitle(e.target.value)}
						autoFocus
					/>
				</div>
				<div className="write__form--group">
					<textarea
						type="text"
						placeholder="Tell your story.."
						className="write__input write__text"
						onChange={e => setDesc(e.target.value)}
					></textarea>
				</div>
				<button className="write__submit" type="submit">
					Publish
				</button>
			</form>
		</div>
	)
}

export default Write
