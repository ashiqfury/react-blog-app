import Post from './Post'
import noPostImg from '../assets/NoMessage.svg'

const Posts = ({ posts }) => {
	return (
		<div className="posts" id="postId">
			{posts.map(post => (
				<Post post={post} key={post._id} />
			))}

			{posts.length === 0 && (
				<div className="posts__error">
					<img src={noPostImg} alt="Not Found" className="posts__error--img" />
					<p className="posts__error--message">No Posts Available!</p>
				</div>
			)}
		</div>
	)
}
export default Posts
