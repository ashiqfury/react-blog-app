import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const Register = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)

	useEffect(() => {
		gsap.from('.register__left', { x: '100%', duration: 0.5, ease: 'ease-out' })
	}, [])

	const handleSubmit = async e => {
		e.preventDefault()
		setError(false)
		try {
			const res = await axios.post('/auth/register', {
				username,
				email,
				password,
			})
			res.data && window.location.replace('/login')
		} catch (err) {
			setError(true)
		}
	}

	return (
		<div className="register">
			<div className="register__left">
				<span>Fury Blogz.</span>
				<p>
					Don't waste your time on thinking, share your ideas with us and we will turn them into
					reality...
				</p>
			</div>
			<div className="register__right">
				<span className="register__title">Register</span>
				<form className="register__form" onSubmit={handleSubmit}>
					<label>Username</label>
					<input
						className="register__input"
						type="text"
						placeholder="Enter your username..."
						onChange={e => setUsername(e.target.value)}
						required
						autoFocus
					/>
					<label>Email</label>
					<input
						className="register__input"
						type="text"
						placeholder="Enter your email..."
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<label>Password</label>
					<input
						className="register__input"
						type="password"
						placeholder="Enter your password..."
						onChange={e => setPassword(e.target.value)}
						required
					/>
					<button className="register__button">Register</button>

					{error && <span className="register__error">Something went wrong!</span>}

					<p className="register__login">
						Already have an account?{' '}
						<Link className="link signin" to="/login">
							Sign In
						</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Register
