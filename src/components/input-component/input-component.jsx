import React from 'react'

const Input = ({type='text', ...others}) => {
	return (
		<>
			<input
				type={type}
				{...others}
			/>
		</>
	)
}

export default Input