import './post.css'

const Post = () => {
	return (
		<div className="post">
			<img
				src="https://images.pexels.com/photos/10413293/pexels-photo-10413293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				// src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				alt=""
				className="postImg"
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">This is the post title</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti non dolorum qui sequi
				provident pariatur odit, illo perferendis praesentium saepe doloremque necessitatibus culpa
				labore reiciendis aperiam. Ipsum nostrum consequatur enim.
			</p>
		</div>
	)
}

export default Post
