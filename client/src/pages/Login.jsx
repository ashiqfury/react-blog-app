import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { sliderAnim } from '../animations/login'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
	const [error, setError] = useState('')
	const { dispatch, isFetching } = useContext(Context)
	const history = useHistory()

	const initialValues = { username: '', password: '' }

	const onSubmit = async values => {
		setError('')
		dispatch({ type: 'LOGIN_START' })
		try {
			const res = await axios.post('auth/login', values)
			toast.success('Login Successful', { position: 'bottom-center', className: 'toast' })
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE' })
			setError(err.response.data)
			toast.error(err.response.data, { position: 'bottom-center', className: 'toast' })
		}
	}

	const validate = values => {
		const errors = {}
		if (!values.username) errors.username = 'Required'
		else if (values.username.length < 3) errors.username = 'Must be 3 characters or more'
		else if (values.username.length > 15) errors.username = 'Must be 15 characters or less'
		else if (!/^[a-zA-Z0-9]+$/.test(values.username)) errors.username = 'Must be alphanumeric'
		if (!values.password) errors.password = 'Required'
		else if (values.password.length < 8) errors.password = 'Must be at least 8 characters'
		else if (values.password.length > 30) errors.password = 'Must be less than 30 characters'
		return errors
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
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
		<div className="login">
			<Toaster />
			<div className="login__left">
				<span className="login__title">Login</span>
				<form className="login__form" onSubmit={formik.handleSubmit}>
					<label htmlFor="username">Username</label>
					<input
						className="login__input"
						type="text"
						id="username"
						placeholder="Enter your username..."
						name="username"
						{...formik.getFieldProps('username')}
						// autoFocus
					/>
					{formik.errors.username && formik.touched.username ? (
						<p className="error">{formik.errors.username}</p>
					) : null}

					<label htmlFor="password">Password</label>
					<div className="eye">
						<input
							className="eye__input register__input"
							type={`${passVisiblity ? 'text' : 'password'}`}
							placeholder="Enter your password..."
							id="password"
							name="password"
							{...formik.getFieldProps('password')}
						/>
						<i
							className={`fa-solid eye__icon ${eyeIcon ? 'fa-eye-slash' : 'fa-eye'}`}
							onClick={eyeHandler}
						></i>
					</div>
					{formik.errors.password && formik.touched.password ? (
						<p className="error">{formik.errors.password}</p>
					) : null}

					<button type="submit" className="login__button" disabled={isFetching || !formik.isValid}>
						{isFetching ? 'Loading...' : 'Login'}
					</button>

					{error && <span className="register__error">{error.toString()}</span>}

					<p className="login__register">
						You don't have an account?{' '}
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
