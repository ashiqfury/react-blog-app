import axios from 'axios'
import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

const Login = () => {
	const usernameRef = useRef()
	const passwordRef = useRef()
	const { dispatch, isFetching } = useContext(Context)

	const handleSubmit = async e => {
		e.preventDefault()
		dispatch({ type: 'LOGIN_START' })
		try {
			const res = await axios.post('/auth/login', {
				username: usernameRef.current.value,
				password: passwordRef.current.value,
			})
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE' })
		}
	}

	return (
		<div className="login" onSubmit={handleSubmit}>
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
					Login
				</button>
				<button className="login__button--register" type="submit">
					<Link className="link" to="/register">
						Register
					</Link>
				</button>
			</form>
		</div>
	)
}

export default Login
