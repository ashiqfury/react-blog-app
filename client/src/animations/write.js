import gsap from 'gsap'

const classAnim = [
	'.write__heading',
	'.write__icon',
	'.write__input.title',
	'.write__input.cats',
	'.write__input.write__text',
	'.write__submit',
]

export const animation = () =>
	classAnim.forEach((e, i) => {
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
