import gsap from 'gsap'

export const topbar = () =>
	gsap.from('.topbar', {
		y: '-100%',
		duration: 0.5,
		ease: 'ease-out',
	})

export const topbar__element = elementClass =>
	gsap.from(`.topbar__${elementClass}`, {
		y: '-30',
		duration: 1,
		ease: 'ease-out',
		opacity: 0,
		delay: 0.5,
	})
