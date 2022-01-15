const Header = () => {
	return (
		<div className="header">
			<div className="header__title">
				<span className="header__title--sm">Blog application using react and node.</span>
				<span className="header__title--lg">Blog</span>
				<a href="#home" className="header__explore">
					Lets explore <i className="fas fa-angle-right"></i>
				</a>
			</div>
			<div className="header__img"></div>
		</div>
	)
}

export default Header
