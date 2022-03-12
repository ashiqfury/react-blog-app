import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Context } from '../context/Context'
import { animation } from '../animations/settings'

const Settings = () => {
	const { user, dispatch } = useContext(Context)
	const [file, setFile] = useState(null)
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [bio, setBio] = useState('')
	const [facebook, setFacebook] = useState('')
	const [instagram, setInstagram] = useState('')
	const [twitter, setTwitter] = useState('')
	const [success, setSuccess] = useState(false)
	const PF = 'http://localhost:2506/images/'

	const handleSubmit = async e => {
		e.preventDefault()
		dispatch({ type: 'UPDATE_START' })
		const updatedUser = {
			userId: user._id,
			username: username || user.username,
			email: email || user.email,
			name: name || user.name,
			bio: bio || user.bio,
			facebook: facebook || user.facebook,
			instagram: instagram || user.instagram,
			twitter: twitter || user.twitter,
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
			e.target.reset()
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

	useEffect(() => {
		animation()
	}, [])

	return (
		<div className="settings">
			<div className="settings__wrapper">
				<div className="settings__title">
					<span className="settings__title--update">Update your account</span>
					<span className="settings__title--delete" onClick={handleDelete}>
						Delete account
					</span>
				</div>
				<form className="form settings__form" onSubmit={handleSubmit}>
					<label className="profile-label">Profile picture</label>
					<div className="settings__profilePicture">
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
						<label htmlFor="fileInput" className="settings__form__profile--icon">
							<i className="settings__profilePicture--icon far fa-user-circle"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: 'none' }}
							onChange={e => setFile(e.target.files[0])}
						/>
					</div>

					<label className="uname-label">Username</label>
					<input
						type="text"
						placeholder={user.username}
						onChange={e => setUsername(e.target.value)}
						className="uname-input"
					/>
					<label className="email-label">Email</label>
					<input
						type="email"
						placeholder={user.email}
						onChange={e => setEmail(e.target.value)}
						className="email-input"
					/>
					<label className="flname-label">Full Name</label>
					<input
						type="text"
						placeholder={user?.name || 'full name'}
						onChange={e => setName(e.target.value)}
						className="flname-input"
					/>

					<label className="bio-label">Bio</label>
					<textarea
						placeholder="Enter your interests..."
						onChange={e => setBio(e.target.value)}
						className="bio-input"
					></textarea>

					<label className="social-label">Social Media</label>
					<div className="settings__social">
						<input
							type="text"
							placeholder={user.facebook ? `facebook @${user.facebook}` : 'facebook'}
							className="settings__social--input facebook"
							onChange={e => setFacebook(e.target.value)}
						/>
						<input
							type="text"
							placeholder={user.instagram ? `instagram @${user.instagram}` : 'instagram'}
							className="settings__social--input instagram"
							onChange={e => setInstagram(e.target.value)}
						/>
						<input
							type="text"
							placeholder={user.twitter ? `twitter @${user.twitter}` : 'twitter'}
							className="settings__social--input twitter"
							onChange={e => setTwitter(e.target.value)}
						/>
					</div>

					<label className="pwd-label">Password</label>
					<input
						type="password"
						required
						placeholder="Enter your password to update profile..."
						onChange={e => setPassword(e.target.value)}
						className="pwd-input"
					/>

					<button className="settings__submit" type="submit">
						Update
					</button>
					{success && <span className="settings__success">Your profile has been updated!</span>}
				</form>
			</div>
			<Sidebar />
		</div>
	)
}

export default Settings
