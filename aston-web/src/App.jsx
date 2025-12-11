import { useState } from 'react'
import InputField from './components/inputField.jsx'
import './App.css'

function Print(formData){
	const data = formData.values()
	for(const value of data){console.log(value)}
}
function App() {
	//const [count, setCount] = useState(0)

	return (
		<>
			<form action={Print}>
				<InputField dataType="firstName" label="First Name"/>
				<InputField dataType="lastName" label="Last Name"/>
				<InputField dataType="phoneNumber" label="Phone Number"/>
				<button type="submit">Submit</button>
			</form>
		</>
	)
}

export default App
