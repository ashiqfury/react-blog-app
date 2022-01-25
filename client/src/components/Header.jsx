import { useEffect } from 'react'
import { gsap } from 'gsap'

const Header = () => {
	useEffect(() => {
		// gsap.fromTo(".header__title--sm", {opacity: 0}, {opacity: 0.5, duration: 1});
		gsap.from('.header__title--sm', {
			y: '-30',
			duration: 0.5,
			ease: 'ease-out',
			delay: 0.5,
			opacity: 0,
			// scale: 0,
		})
		gsap.from('.header__title--lg', {
			y: '-30',
			duration: 0.5,
			ease: 'ease-out',
			delay: 0.8,
			opacity: 0,
			// scale: 0,
		})
		gsap.from('.header__explore', {
			y: '-30',
			duration: 0.5,
			ease: 'ease-out',
			delay: 1,
			opacity: 0,
			// scale: 0,
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
