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
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <strong>Fury</strong>
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, temporibus consequatur
					assumenda dolore asperiores inventore exercitationem quo doloribus, at, veniam quia minima
					distinctio nobis quae optio eligendi? Quisquam dolores et reiciendis doloremque dolorem
					dicta recusandae odit voluptatem voluptas officia! Temporibus impedit iusto ad ratione
					molestiae, tempore voluptates magni corrupti libero ullam, tempora debitis? Tempore
					recusandae facilis tenetur illo deserunt quos doloribus, totam harum id omnis porro
					voluptate cum corrupti! Temporibus tempora non quas laborum. Quis nobis modi perferendis
					voluptatibus illo voluptatum accusamus sint similique reprehenderit ullam totam sed
					consequuntur, porro quibusdam quod sit ipsum fugit culpa hic! Asperiores, enim aut? Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. Non, earum sit numquam molestias
					provident iusto officia dolorem doloremque accusantium sed. Quasi repudiandae odit sunt
					dolorem omnis tenetur velit? Est dolores quam laudantium fugit provident facilis illum
					libero eos voluptate quasi! Error id neque blanditiis unde dolores quasi quaerat sunt
					aspernatur?
				</p>
			</div>
		</div>
	)
}

export default SinglePost
