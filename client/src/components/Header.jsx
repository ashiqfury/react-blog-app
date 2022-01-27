import { useEffect } from 'react'
import { gsap } from 'gsap'

const animArray = ['.header__title--sm', '.header__title--lg', '.header__explore']

const Header = () => {
	useEffect(() => {
		animArray.forEach((e, i) => {
			gsap.fromTo(
				e,
				{
					y: '-30',
					duration: 1,
					ease: 'ease-out',
					opacity: 0,
				},
				{
					y: 0,
					delay: 0.3 * (i + 1),
					opacity: 1,
				}
			)
		})
	}, [])

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
