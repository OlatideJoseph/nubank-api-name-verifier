import * as React from 'react'
import Select from './select-component'

const LabeledSelect = ({ id, labelName, children, ...others}) => (
	<>
		{
			labelName ? (
				<label htmlFor={ id }>
					{ labelName }
				</label>
			): null
		}
		<br/>
		<Select
			id={id}
			{...others}
		>
			{
				children
			}
		</Select>
	</>
)

export default LabeledSelect