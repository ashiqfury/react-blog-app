import { gsap } from 'gsap'

const animArray = [
	'.sidebar__title.author',
	'.sidebar__img',
	'.sidebar__name',
	'.sidebar__bio',

	'.sidebar__title.cats',
	'.sidebar__list.cats',

	'.sidebar__title.users',
	'.sidebar__list.users',

	'.sidebar__title.social',
	'.sidebar__social.social',
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
