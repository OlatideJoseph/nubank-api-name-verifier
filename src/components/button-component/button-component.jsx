import * as React from 'react'

const Button = ({ children, ...others }) => (
	<>
		<button type='button' { ...others }>
			{ children }
		</button>
	</>
)

export default Button;