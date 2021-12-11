import './topbar.css'

const Topbar = () => {
	return (
		<div className="topbar">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook-square"></i>
				<i className="topIcon fab fa-twitter-square"></i>
				<i className="topIcon fab fa-pinterest-square"></i>
				<i className="topIcon fab fa-instagram-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">HOME</li>
					<li className="topListItem">ABOUT</li>
					<li className="topListItem">CONTACT</li>
					<li className="topListItem">WRITE</li>
					<li className="topListItem">LOGOUT</li>
				</ul>
			</div>
			<div className="topRight">
				<img
					className="topImg"
					src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt=""
				/>
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	)
}

export default Topbar
