import { useState } from 'react'
import InputField from './components/inputField.jsx'
import './App.css'

async function Print(formData){
	const response = await fetch(
		'localhost:3000',{
			method: 'POST',
			headers: {
				'User-Agent': 'undici-stream-example',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName: formData.get('firstName'),
			}),
		}
	);
}
function App() {
	//const [count, setCount] = useState(0)

	return (
		<>
			<form action={Print}>
				<InputField dataType="firstName" label="First Name"/>
				<InputField dataType="lastName" label="Last Name"/>
				<InputField dataType="email" label="Email"/>
				<InputField dataType="reason" label="Reason"/>
				<button type="submit">Submit</button>
			</form>
		</>
	)
}

export default App
