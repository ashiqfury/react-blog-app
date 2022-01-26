import React, { useEffect } from 'react'
import Tech from '../components/Tech'
import fury from '../assets/fury.jpg'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import sass from '../assets/sass.png'
import redux from '../assets/redux.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import gsap from 'gsap'
// import email from '../assets/email.png'

const classLeft = [
	'.about__left__logo',
	'.about__left__dev',
	'.about__left__name',
	'.about__left__desc',
	'.about__left__button',
]

const About = () => {
	useEffect(() => {
		gsap.from('.about__left', {
			x: '-50',
			duration: 1,
			ease: 'ease-out',
		})
		classLeft.forEach((e, i) => {
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
		gsap.from('.about__right', {
			x: '50',
			duration: 1,
			ease: 'ease-out',
			delay: 1,
			opacity: 0,
		})
	})

	return (
		<div className="about">
			<div className="about__wrapper">
				<div className="about__left">
					<span className="about__left__logo">Fury Blogz.</span>
					<div>
						<img src={fury} alt="Developer Profile" className="about__left__dev" />
						<span className="about__left__name">Ashiq Fury</span>
						<span className="about__left__desc">
							Building fullstack projects with passion and love. I am creating a new world with
							creativity. Share your ideas with us to build our dream world together.
						</span>
						<div className="about__left__button">
							<a href="https://github.com/ashiqfury/" target="_blank" rel="noreferrer">
								<i className="fas fa-user"></i>
							</a>
							<a
								href="https://github.com/ashiqfury/react-blog-app/"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a>
						</div>
					</div>
				</div>
				<div className="about__right">
					<div className="about__right__wrapper">
						<div className="about__top">
							<span className="about__title">Tech Stack Used</span>
							<div className="about__techs">
								<Tech img={react} name="React Js" desc="UI Development" alt="react" />
								<Tech img={node} name="Node Js" desc="Server" alt="node" />
								<Tech img={express} name="Express Js" desc="API Development" alt="express" />
								<Tech img={mongo} name="Mongo DB" desc="NoSQL Database" alt="mongo" />
								<Tech img={sass} name="Sass" desc="Styling" alt="sass" />
								<Tech img={redux} name="Redux" desc="State Management" alt="redux" />
								<Tech img={git} name="Git" desc="Source Control" alt="git" />
								<Tech img={github} name="Github" desc="Code Hosting" alt="github" />
								{/* <Tech img={email} name="Email Js" desc="Sending Email" alt="email" /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
