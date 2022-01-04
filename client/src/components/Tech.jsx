const Tech = ({ img, name, desc, alt }) => {
	return (
		<div className={`about__tech about__tech--${alt}`}>
			<img src={img} alt={alt} className="about__tech--img" />
			<p className="about__tech--name">{name}</p>
			<p className="about__tech--desc">{desc}</p>
		</div>
	)
}

export default Tech
