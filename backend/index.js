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
	console.log(writeResponse);

}

function main(){
	const hostName='localhost';
	const port=3000;

	const server = createServer((req, res) =>{
		res.statusCode= 200;
	});

	server.listen(port, hostName, () =>{
		console.log('server is listening');
	})
}

main();
