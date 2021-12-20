import './write.css'

const Write = () => {
	return (
		<div className="write">
			<img
				src="https://images.pexels.com/photos/4601092/pexels-photo-4601092.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				alt=""
				className="writeImg"
			/>
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className=" writeIcon fas fa-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{ display: 'none' }} />
					<input type="text" placeholder="Title" className="writeInput" autoFocus />
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell your story.."
						type="text"
						className="writeInput writeText"
					></textarea>
				</div>
				<button className="writeSubmit">Publish</button>
			</form>
		</div>
	)
}

export default Write
