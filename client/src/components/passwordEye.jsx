import { useState } from 'react'

const PasswordEye = ({ passwordRef, page, setPassword }) => {
	const [eyeIcon, setEyeIcon] = useState(false)
	const [passVisiblity, setPassVisiblity] = useState(false)

	const eyeHandler = () => {
		setEyeIcon(!eyeIcon)
		setPassVisiblity(!passVisiblity)
	}

	return (
		<>
			<label>Password</label>
			<div className="eye">
				{page === 'login' ? (
					<input
						className="eye__input login__input"
						type={`${passVisiblity ? 'text' : 'password'}`}
						placeholder="Enter your password..."
						ref={passwordRef}
						required
					/>
				) : (
					<input
						className="eye__input register__input"
						type={`${passVisiblity ? 'text' : 'password'}`}
						placeholder="Enter your password..."
						onChange={e => setPassword(e.target.value)}
						required
					/>
				)}
				<i
					className={`fa-solid eye__icon ${eyeIcon ? 'fa-eye-slash' : 'fa-eye'}`}
					onClick={eyeHandler}
				></i>
			</div>
		</>
	)
}

export default PasswordEye
