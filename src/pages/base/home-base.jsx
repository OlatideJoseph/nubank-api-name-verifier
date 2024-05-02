import * as React from 'react'
import axios from 'axios'
import LabeledInput from '../../components/input-component/labeled-input-component'
import Button from '../../components/button-component/button-component'
import LabeledSelect from '../../components/select-component/labeled-select-component'
import SelectOption from '../../components/select-option-component/select-option-component'
import './home-base.css'

const apiVerifier = `https://nubapi.com/api/verify/`

export const getBankCredentials = async (accountNumber, bankCode) => {
	try {
		const resp = await axios.get(
			`${apiVerifier}?account_number=${accountNumber}&bank_code=${bankCode}`,
			{
				headers: {
					'Authorization': 'Bearer D56fXxjLQQag8vPlbrgGSuOfE26wcHmnuy23FBsK0de33c7c',
					'Content-Type': 'application/json'
				}
			}
		)
		return resp.data
	} catch (error){
		console.log(error);
	}
}


const HomeBase = (props) => {
	const [account, setAccount] = React.useState('')
	const [name, setName] = React.useState('')
	const [banks, setBanks] = React.useState([])
	const [bankCode, setBankCode] = React.useState('')
	const [expectedName, setExpectedName] = React.useState('')

	React.useEffect(() => {
		const req = axios.get('https://nubapi.com/bank-json')
		req
		.then( res => res.data)
		.then(data => {
			setBanks(data)
		})
	}, [])
	const handleSubmit = async function(event){
		let c = confirm("Are you sure ?")
		if (account.length >= 10) {
			let resp = await getBankCredentials(account, bankCode)
			c ? setExpectedName(resp.account_name):null
		}
	}

	return (
		<div className='home-page'>
			{
				expectedName ? (<p className='account-success'>{expectedName}</p>):null
			}
			<form
				method='post'
				className='form-div'
			> 
				<LabeledInput
					id={'account-number'}
					name={'account-number'}
					placeholder={'2033881546'}
					onChange={(e) => (setAccount(e.target.value))}
				>
					Account Number:
				</LabeledInput>
				<br/>
				<LabeledInput
					id={'expected-name'}
					name={'expected-name'}
					placeholder={'John. Doe'}
					onChange={(e) => (setName(e.target.value.toLowerCase()))}
				>
					Expected Name:
				</LabeledInput>
				<br/>
				<LabeledSelect
					name='select'
					id={'banks'}
					labelName={'Select Bank:'}
					onChange={(event) => {setBankCode(event.target.value);console.log(event.target.value)}}
				>
					{
						banks.map((v) => (
								<SelectOption key={v.code} value={v.code}>
									{v.name}
								</SelectOption>
							)
						)
					}
				</LabeledSelect>
				<Button
					onClick={ handleSubmit }
				>
					Check Name
				</Button>
			</form>
		</div>
	)
}


export default HomeBase