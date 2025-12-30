import type {FormSubmission} from '../../interface.ts'
import {google} from 'googleapis';
import { authenticateKey } from './authenticate.ts';

const SCOPE = ['https://www.googleapis.com/auth/spreadsheets']
const RANGE = 'MAIN!A2:D1000';
const SHEETID = process.env.SHEETID;

export async function appendFormData(formSubmission : FormSubmission){

	// Extract form inputs as string array
	// Format for google row entry requires string array 
	const formSubmissionValues : Array<string>= Object.values(formSubmission)

	// Authenticate/Identify self 
	const auth = authenticateKey(SCOPE)

	// Connect and Create API Object
	const googleSheets = google.sheets({
		version: 'v4',
		auth,
	});

	const writeResponse = await googleSheets.spreadsheets.values.append({
		spreadsheetId: SHEETID,
		range:RANGE,
		valueInputOption:'RAW',
		requestBody: {
			values: [formSubmissionValues]
		}
	});
}
