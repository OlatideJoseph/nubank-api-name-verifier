import * as React from 'react'
import Input from './input-component'
import './labeled.css'

const LabeledInput = ({ id, children, ...others }) => {
	return (
		<>
			<label htmlFor={id}>
				{ children }
			</label>
			<br/>
			<Input
				id={id}
				{ ...others }
			/>
		</>
	)
}

export default LabeledInput