export default function InputField({dataType, label}){
	return(
		<section>
			<label htmlFor={dataType}>{label}</label>
			<input name={dataType}></input>
		</section>
	);
}
