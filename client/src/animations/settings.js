import { gsap } from 'gsap'

const animArray = [
	'.settings__title--update',
	'.settings__title--delete',

	'.profile-label',
	'.settings__profilePicture',

	'.uname-label',
	'.uname-input',

	'.email-label',
	'.email-input',

	'.flname-label',
	'.flname-input',

	'.bio-label',
	'.bio-input',

	'.social-label',
	'.settings__social--input.facebook',
	'.settings__social--input.instagram',
	'.settings__social--input.twitter',

	'.pwd-label',
	'.pwd-input',

	'.settings__submit',
]

export const animation = () =>
	animArray.forEach((e, i) => {
		gsap.fromTo(
			e,
			{
				y: '30',
				duration: 0.5,
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
