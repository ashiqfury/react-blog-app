import img from '../assets/evie-s-_8vovuZCj0c-unsplash.jpg'
import imgDark from '../assets/istockphoto-1285395672-170667a.jpg'

const Header = ({ dark }) => {
	return (
		<div className="header">
			<div className="header__title">
				{/* <span className="header__title--sm">React &amp; Node</span> */}
				<span className="header__title--sm">Blog application using react and node.</span>
				<span className="header__title--lg">Blog</span>
				<a href="#home" className="header__explore">
					Lets explore <i className="fas fa-angle-right"></i>
				</a>
			</div>
			{dark ? (
				<img src={imgDark} alt="Hero" className="header__img" />
			) : (
				<img src={img} alt="Hero" className="header__img" />
			)}
		</div>
	)
}

export default Header
