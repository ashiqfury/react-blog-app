import gsap from 'gsap'

const animBio = [
	'.about__left__logo',
	'.about__left__dev',
	'.about__left__name',
	'.about__left__desc',
	'.about__left__button',
]

export const bioAnim = () =>
	animBio.forEach((e, i) => {
		gsap.fromTo(
			e,
			{
				y: '50',
				duration: 1,
				ease: 'ease-out',
				opacity: 0,
			},
			{
				y: 0,
				delay: 0.2 * (i + 1),
				opacity: 1,
			}
		)
	})

export const containerAnim = elementClass => {
	const direction = elementClass === 'left' ? '-50' : '50'
	const opacity = elementClass === 'left' ? 1 : 0
	const delay = elementClass === 'left' ? 0 : 1

	gsap.from(`.about__${elementClass}`, {
		x: direction,
		duration: 1,
		ease: 'ease-out',
		delay,
		opacity,
	})
}
