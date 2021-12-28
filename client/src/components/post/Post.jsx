import './post.css'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
	const PF = 'http://localhost:2506/images/'
	return (
		<div className="post">
			{post.photo && <img src={PF + post.photo} alt="" className="postImg" />}
			<div className="postInfo">
				<div className="postCats">
					{post?.categories.map(cat => (
						<span className="postCat">{cat}</span>
					))}
				</div>
				<Link to={`/post/${post._id}`} className="link">
					<span className="postTitle">{post.title}</span>
				</Link>
				<hr />
				<span className="postDate">{new Date(post.createdAt).toDateString()}</span>
			</div>
			<p className="postDesc">{post.desc}</p>
		</div>
	)
}

export default Post
