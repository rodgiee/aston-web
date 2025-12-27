import { createServer } from 'node:http'; 
import {appendFormData} from './utils/append_form_data.ts'

function main(){
	const hostName : string = 'localhost';
	const port : number = 3000;

	const server = createServer((req, res) =>{

		// RESPONSE TO CLIENT
		res.writeHead(200,{
			'access-control-allow-origin': '*',
		});

		// Signal that the message is complete and send
		res.end('ok');
		console.log('data sent')

		// INCOMING REQUEST
		// Parse the incoming message into JSON object
		let incomingRequestBody =  ""
		req.on('data', chunk=>{incomingRequestBody+=chunk.toString()})
		req.on('end', ()=>{
			const parsedBody = JSON.parse(incomingRequestBody)

			// Pass form data as an array of strings
			appendFormData(Object.values(parsedBody))
		})


	});

	server.listen(port, hostName, () =>{
		console.log('server is listening');
	})
}

main();

