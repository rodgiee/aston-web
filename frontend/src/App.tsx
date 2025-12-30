import type {FormSubmission} from '../../interface.ts'
import InputField from './components/inputField.tsx'
import './App.css'

async function formSubmit(formData : FormData){

	const bodyMessage : FormSubmission = {
		firstName: formData.get('firstName'),
		lastName: formData.get('lastName'),
		email: formData.get('email'),
		description: formData.get('description'),
	}


	const url = 'http://localhost:3000'

	await fetch(url, {
		method: 'POST',
		body: JSON.stringify(bodyMessage),
	}).then(response=>console.log(response))

	

}
function App() {
	return (
		<>
			<form action={formSubmit}>
				<InputField dataType="firstName" label="First Name"/>
				<InputField dataType="lastName" label="Last Name"/>
				<InputField dataType="email" label="Email"/>
				<InputField dataType="description" label="Reason"/>
				<button type="submit">Submit</button>
			</form>
			<button type='button' onClick={formSubmit}>test response</button>
		</>
	)
}

export default App
