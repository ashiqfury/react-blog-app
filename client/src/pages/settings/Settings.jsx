import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

const Settings = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update your account</span>
					<span className="settingsDeleteTitle">Delete account</span>
				</div>
				<form className="form settingsForm">
					<label>Profile picture</label>
					<div className="settingsProfilePicture">
						<img
							src="https://images.pexels.com/photos/3286807/pexels-photo-3286807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsProfilePictureIcon far fa-user-circle"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: 'none' }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Fury" />
					<label>Email</label>
					<input type="email" placeholder="fury@dev.com" />
					<label>Username</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	)
}

export default Settings
