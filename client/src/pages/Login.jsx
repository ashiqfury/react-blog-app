import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { sliderAnim } from '../animations/login'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'

const Login = () => {
	const [error, setError] = useState(false)
	const { dispatch, isFetching } = useContext(Context)
	const history = useHistory()

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit: async values => {
			setError(false)
			dispatch({ type: 'LOGIN_START' })
			try {
				const res = await axios.post('auth/login', values)
				dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
			} catch (err) {
				dispatch({ type: 'LOGIN_FAILURE' })
				setError(true)
			}
		},
		validate: values => {
			const errors = {}
			if (!values.username) {
				errors.username = 'Required'
			} else if (values.username.length < 3) {
				errors.username = 'Must be 3 characters or more'
			} else if (values.username.length > 15) {
				errors.username = 'Must be 15 characters or less'
			} else if (!/^[a-zA-Z0-9]+$/.test(values.username)) {
				errors.username = 'Must be alphanumeric'
			}

			if (!values.password) {
				errors.password = 'Required'
			} else if (values.password.length < 8) {
				errors.password = 'Password must be at least 8 characters'
			} else if (values.password.length > 30) {
				errors.password = 'Password must be less than 30 characters'
			}
			return errors
		},
	})

	useEffect(() => {
		sliderAnim()
	}, [])

	const [eyeIcon, setEyeIcon] = useState(false)
	const [passVisiblity, setPassVisiblity] = useState(false)

	const eyeHandler = () => {
		setEyeIcon(!eyeIcon)
		setPassVisiblity(!passVisiblity)
	}

	return (
		<div className="login" onSubmit={formik.handleSubmit}>
			<div className="login__left">
				<span className="login__title">Login</span>
				<form className="login__form">
					<label>Username</label>
					<input
						className="login__input"
						type="text"
						placeholder="Enter your username..."
						name="username"
						onChange={formik.handleChange}
						value={formik.values.username}
						onBlur={formik.handleBlur}
						// autoFocus
					/>
					{formik.errors.username && formik.touched.username ? (
						<p className="error">{formik.errors.username}</p>
					) : null}

					<label>Password</label>
					<div className="eye">
						<input
							className="eye__input register__input"
							type={`${passVisiblity ? 'text' : 'password'}`}
							placeholder="Enter your password..."
							onChange={formik.handleChange}
							value={formik.values.password}
							onBlur={formik.handleBlur}
							name="password"
						/>
						<i
							className={`fa-solid eye__icon ${eyeIcon ? 'fa-eye-slash' : 'fa-eye'}`}
							onClick={eyeHandler}
						></i>
					</div>
					{formik.errors.password && formik.touched.password ? (
						<p className="error">{formik.errors.password}</p>
					) : null}

					<button className="login__button" disabled={isFetching}>
						{isFetching ? 'Loading...' : 'Login'}
					</button>

					{error && <span className="register__error">Something went wrong!</span>}

					<p className="login__register">
						You don't have an account?&nbsp;
						<span className="link signup" onClick={() => history.push('/register')}>
							Sign Up
						</span>
					</p>
				</form>
			</div>
			<div className="login__right">
				<span>Fury Blogz.</span>
				<p>
					Don't waste your time on thinking, share your ideas with us and we will turn them into
					reality...
				</p>
			</div>
		</div>
	)
}

export default Login
