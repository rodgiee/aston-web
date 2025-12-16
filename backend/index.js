import path from 'node:path';
import {google} from 'googleapis';
import {write} from 'node:fs';

const SCOPE = ['https://www.googleapis.com/auth/spreadsheets']
const CREDENTIALS = path.join(process.cwd(), 'credentials.json');
const SHEETID = process.env.SHEETID;
const RANGE = 'Sheet1!A1:A2'

async function writeSpreadsheet(){

	// Authenticate self 
	const auth = new google.auth.GoogleAuth({
		keyFile: CREDENTIALS,
		scopes: SCOPE,
	});

	// Create API Object
	const googleSheets = google.sheets({
		version: 'v4',
		auth,
	});

	const sheet = await googleSheets.spreadsheets.values.get({
		spreadsheetId: SHEETID,
		range:RANGE,
	});

	console.log(sheet.data.values);
	return 1;
}

console.log(writeSpreadsheet());


