import axios from 'axios'
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

const Login = () => {
	const usernameRef = useRef()
	const passwordRef = useRef()
	const [error, setError] = useState(false)
	const { dispatch, isFetching } = useContext(Context)

	const handleSubmit = async e => {
		e.preventDefault()
		setError(false)
		dispatch({ type: 'LOGIN_START' })
		try {
			const res = await axios.post('/auth/login', {
				username: usernameRef.current.value,
				password: passwordRef.current.value,
			})
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE' })
			setError(true)
		}
	}

	return (
		<div className="login" onSubmit={handleSubmit}>
			<div className="login__left">
				<span className="login__title">Login</span>
				<form className="login__form">
					<label>Username</label>
					<input
						className="login__input"
						type="text"
						placeholder="Enter your username..."
						ref={usernameRef}
						required
						autoFocus
					/>
					<label>Password</label>
					<input
						className="login__input"
						type="password"
						placeholder="Enter your password..."
						ref={passwordRef}
						required
					/>
					<button className="login__button" disabled={isFetching}>
						{isFetching ? 'Loading...' : 'Login'}
					</button>

					{error && <span className="register__error">Something went wrong!</span>}

					<p className="login__register">
						You don't have an account?&nbsp;
						<Link className="link signup" to="/register">
							Sign Up
						</Link>
					</p>
				</form>
			</div>
			<div className="login__right">
				<span>Fury Blogz.</span>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorem.</p>
			</div>
		</div>
	)
}

export default Login
