import InputField from './components/inputField.tsx'
import './App.css'

async function Print(formData : FormData){
	const url = 'http://localhost:3000'
	fetch(url).then((response)=>{console.log(response)})
		.catch((error=>{console.log(error)}))

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
