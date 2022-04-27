const Wave = () => {
	return (
		<span>
			<svg
				width="100%"
				height="100%"
				id="svg"
				viewBox="0 0 1440 400"
				xmlns="http://www.w3.org/2000/svg"
				className="transition duration-300 ease-in-out delay-150"
			>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
						<stop offset="5%" stop-color="#382653ff"></stop>
						<stop offset="95%" stop-color="#00b3d6ff"></stop>
					</linearGradient>
				</defs>
				<path
					d="M 0,400 C 0,400 0,200 0,200 C 128.75,186.03571428571428 257.5,172.07142857142858 380,179 C 502.5,185.92857142857142 618.7500000000001,213.75 724,231 C 829.2499999999999,248.25 923.5,254.92857142857144 1041,248 C 1158.5,241.07142857142856 1299.25,220.53571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
					stroke="none"
					stroke-width="0"
					fill="url(#gradient)"
					className="transition-all duration-300 ease-in-out delay-150 path-0"
				></path>
			</svg>
		</span>
	)
}

export default Wave
