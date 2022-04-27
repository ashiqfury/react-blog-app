import { useEffect } from 'react'
import gsap from 'gsap'

const Tech = ({ img, name, desc, alt }) => {
	useEffect(() => {
		gsap.fromTo(
			'.about__tech',
			{
				y: '-30',
				duration: 1,
				ease: 'ease-out',
				opacity: 0,
			},
			{
				y: 0,
				delay: 2,
				opacity: 1,
			}
		)
	}, [])

	return (
		<div className={`about__tech about__tech--${alt}`}>
			<img src={img} alt={alt} className="about__tech--img" crossOrigin="true" />
			<p className="about__tech--name">{name}</p>
			<p className="about__tech--desc">{desc}</p>
		</div>
	)
}

export default Tech
