import gsap from 'gsap'

const animArray = [
	'.infolist__user',
	'.infolist__email',
	'.infolist__phone',
	'.infolist__location',
	'.sci',
]

const inputArray = ['.fname', '.lname', '.email', '.phone', '.message']

export const containerAnim = elementClass => {
	const direction = elementClass === 'Info' ? '-50' : '50'

	gsap.from(`.contact${elementClass}`, {
		x: direction,
		duration: 0.5,
		ease: 'ease-out',
		opacity: 0.9,
	})
}

export const animation = () =>
	animArray.forEach((e, i) => {
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

export const button = () => {
	gsap.from('.btn-submit', {
		x: -50,
		duration: 0.5,
		ease: 'ease-out',
		opacity: 0,
		delay: 1.5,
	})
}

export const inputAnim = () =>
	inputArray.forEach((e, i) => {
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
