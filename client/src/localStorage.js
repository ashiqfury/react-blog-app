// for theme
export const saveTheme = theme => {
	localStorage.setItem('Theme', JSON.stringify(theme))
}

export const retriveTheme = setTheme => {
	const localTheme = localStorage.getItem('Theme')
	setTheme(JSON.parse(localTheme) || false)
}
