import axios from 'axios'
import { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Context } from '../context/Context'

const Settings = () => {
	const { user, dispatch } = useContext(Context)
	const [file, setFile] = useState(null)
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [success, setSuccess] = useState(false)
	const PF = 'http://localhost:2506/images/'

	const handleSubmit = async e => {
		e.preventDefault()
		dispatch({ type: 'UPDATE_START' })
		const updatedUser = {
			userId: user._id,
			username: username || user.username,
			email: email || user.email,
			password,
		}
		if (file) {
			const data = new FormData()
			const filename = Date.now() + file.name
			data.append('name', filename)
			data.append('file', file)
			updatedUser.profilePic = filename
			try {
				await axios.post('/upload', data)
			} catch (err) {}
		}
		try {
			const res = await axios.put(`/users/${user._id}`, updatedUser)
			setSuccess(true)
			dispatch({ type: 'UPDATE_SUCCESS', payload: res.data })
		} catch (err) {
			dispatch({ type: 'UPDATE_FAILURE' })
		}
	}

	const handleDelete = async () => {
		try {
			await axios.delete(`/users/${user._id}`, { data: { userId: user._id } })
			dispatch({ type: 'LOGOUT' })
		} catch (err) {}
	}

	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update your account</span>
					<span className="settingsDeleteTitle" onClick={handleDelete}>
						Delete account
					</span>
				</div>
				<form className="form settingsForm" onSubmit={handleSubmit}>
					<label>Profile picture</label>
					<div className="settingsProfilePicture">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: user.profilePic
									? PF + user.profilePic
									: `${PF}avatar.jpg`
							}
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsProfilePictureIcon far fa-user-circle"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: 'none' }}
							onChange={e => setFile(e.target.files[0])}
						/>
					</div>
					<label>Username</label>
					<input
						type="text"
						placeholder={user.username}
						onChange={e => setUsername(e.target.value)}
					/>
					<label>Email</label>
					<input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />
					<label>Password</label>
					<input type="password" required onChange={e => setPassword(e.target.value)} />
					<button className="settingsSubmit" type="submit">
						Update
					</button>
					{success && (
						<span style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>
							Your profile has been updated!
						</span>
					)}
				</form>
			</div>
			<Sidebar />
		</div>
	)
}

export default Settings
