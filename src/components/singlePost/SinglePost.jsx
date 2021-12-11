import './singlePost.css'

const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt=""
					className="singlePostImg"
				/>
				<h1 className="singlePostTitle">
					This is the title of the blog
					<div className="singlePostEdit">
						<i className="far fa-edit"></i>
						<i className="far fa-trash-alt"></i>
					</div>
				</h1>
			</div>
		</div>
	)
}

export default SinglePost
