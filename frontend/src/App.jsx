import { useState } from 'react'
import axios from 'axios'
import InputField from './components/inputField.jsx'
import './App.css'

async function Print(formData){
	const url = 'http://localhost:3000'
	axios.get(url).then((res)=>{console.log(res)})
		.catch((error)=>{console.log(error)})

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
			<button type='button' onClick={Print}>test response</button>
		</>
	)
}

export default App
