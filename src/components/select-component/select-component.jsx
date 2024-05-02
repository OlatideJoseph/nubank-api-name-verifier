import * as React from 'react'

const Select = ({name, children, ...others}) => {
	return (
		<>
			<select
				name={name}
				{
					...others
				}
			>
				{
					children
				}
			</select>
		</>
	)
}

export default Select