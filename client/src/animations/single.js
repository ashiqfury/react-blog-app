import { gsap } from 'gsap'

const animArray = [
	'.singlePost__img',
	'.singlePost__title',
	'.singlePost__author',
	'.singlePost__date',
	'.singlePost__categories',
	'.singlePost__desc',
	'.singlePost__button',

	'.comments__title',
	'.comments__input__wrapper',
]

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
