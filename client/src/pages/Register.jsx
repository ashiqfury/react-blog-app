import axios from 'axios'
import { useEffect, useState } from 'react'
import { sliderAnim } from '../animations/register'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'

const Register = () => {
	const [error, setError] = useState(false)
	const history = useHistory()

	const initialValues = {
		username: '',
		email: '',
		password: '',
	}
	const onSubmit = async values => {
		setError(false)
		try {
			const res = await axios.post('/auth/register', values)
			res.data && history.replace('/login')
		} catch (err) {
			setError(true)
		}
	}
	const validate = values => {
		const errors = {}
		if (!values.username) errors.username = 'Required'
		else if (values.username.length < 3) errors.username = 'Must be 3 characters or more'
		else if (values.username.length > 15) errors.username = 'Must be 15 characters or less'
		else if (!/^[a-zA-Z0-9]+$/.test(values.username)) errors.username = 'Must be alphanumeric'

		if (!values.email) errors.email = 'Required'
		else if (values.email.length > 30) errors.email = 'Must be 30 characters or less'
		else if (values.email.length < 5) errors.email = 'Must be 5 characters or more'
		else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
			errors.email = 'Invalid email format'

		if (!values.password) errors.password = 'Required'
		else if (values.password.length < 8) errors.password = 'Must be at least 8 characters'
		else if (values.password.length > 30) errors.password = 'Must be less than 30 characters'

		return errors
	}

	const formik = useFormik({ initialValues, onSubmit, validate })

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
				<form className="register__form" onSubmit={formik.handleSubmit}>
					<label htmlFor="username">Username</label>
					<input
						className="register__input"
						type="text"
						placeholder="Enter your username..."
						id="username"
						name="username"
						{...formik.getFieldProps('username')}
					/>
					{formik.errors.username && formik.touched.username && (
						<p className="error">{formik.errors.username}</p>
					)}
					<label htmlFor="email">Email</label>
					<input
						className="register__input"
						type="text"
						placeholder="Enter your email..."
						id="email"
						name="email"
						{...formik.getFieldProps('email')}
					/>
					{formik.errors.email && formik.touched.email && (
						<p className="error">{formik.errors.email}</p>
					)}

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
					{formik.errors.password && formik.touched.password && (
						<p className="error">{formik.errors.password}</p>
					)}
					<button type="submit" className="register__button">
						Register
					</button>

					{error && <span className="register__error">Something went wrong!</span>}

					<p className="register__login">
						Already have an account?{' '}
						<span className="link signin" onClick={() => history.push('/login')}>
							Sign In
						</span>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Register
