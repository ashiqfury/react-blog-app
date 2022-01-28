import gsap from 'gsap'

const animArray = ['.header__title--sm', '.header__title--lg', '.header__explore']

export const animation = () =>
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
