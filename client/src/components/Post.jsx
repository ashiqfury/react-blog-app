import { Link } from 'react-router-dom'

const Post = ({ post }) => {
	const PF = 'http://localhost:2506/images/'
	return (
		<div className="post">
			<Link to={`/post/${post._id}`} className="link">
				<div className="post__tag">{post.username}</div>
				{post.photo && (
					<img src={PF + post.photo} alt="Post" className="post__img" crossOrigin="true" />
				)}
				<div className="post__info">
					<div className="post__info--cats">
						{post?.categories.map(cat => (
							<span className="post__info--cat" key={cat}>
								{cat}
							</span>
						))}
					</div>
					<span className="post__title">{post.title}</span>
					<span className="post__date">{new Date(post.createdAt).toDateString()}</span>
				</div>
				<p className="post__desc">{post.desc}</p>
			</Link>
		</div>
	)
}

export default Post
