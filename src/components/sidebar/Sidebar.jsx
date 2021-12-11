import './sidebar.css'

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					className="sidebarImg"
					src="https://images.pexels.com/photos/10419271/pexels-photo-10419271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt=""
				/>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime doloremque saepe qui,
					molestias delectus necessitatibus dignissimos ut nam.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Style</li>
					<li className="sidebarListItem">Sport</li>
					<li className="sidebarListItem">Tech</li>
					<li className="sidebarListItem">Cinema</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fab fa-facebook-square"></i>
					<i className="sidebarIcon fab fa-twitter-square"></i>
					<i className="sidebarIcon fab fa-pinterest-square"></i>
					<i className="sidebarIcon fab fa-instagram-square"></i>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
