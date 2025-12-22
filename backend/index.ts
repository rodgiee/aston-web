import path from 'node:path';
import {google} from 'googleapis';
import {createServer} from 'node:http'

const SCOPE = ['https://www.googleapis.com/auth/spreadsheets']
const RANGE = 'MAIN!A2:D1000';
const CREDENTIALS = path.join(process.cwd(), '.credentials.json');
const SHEETID = process.env.SHEETID;

async function appendFormData(){

	// Authenticate/Identify self 
	const auth = new google.auth.GoogleAuth({
		keyFile: CREDENTIALS,
		scopes: SCOPE,
	});

	// Connect and Create API Object
	const googleSheets = google.sheets({
		version: 'v4',
		auth,
	});

	const values = [[
		'rodge',
		'rebeca',
		'rodgerebeca@gmail.com',
		'just testing!',
	]];

	const writeResponse = googleSheets.spreadsheets.values.append({
		spreadsheetId: SHEETID,
		range:RANGE,
		valueInputOption:'RAW',
		requestBody: {
			values: values
		}
	});
}

function main(){
	const hostName : string = 'localhost';
	const port : number = 3000;

	const server = createServer((req, res) =>{

		// RESPONSE
		res.writeHead(200,{
			'access-control-allow-origin': '*',
		});

		// Signal that the message is complete and send
		res.end('ok');
		console.log('data sent')


		interface Message{
			message: string;
		}

		// REQUEST
		let incomingRequestBody =  ""
		req.on('data', chunk=>{incomingRequestBody+=chunk.toString()})
		req.on('end', ()=>{
			const parsedBody : Message = JSON.parse(incomingRequestBody)
			console.log(parsedBody.message);
		})
	});

	server.listen(port, hostName, () =>{
		console.log('server is listening');
	})
}

main();

