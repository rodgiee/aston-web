import {google} from 'googleapis';
import path from 'node:path';

const CREDENTIALS = path.join(process.cwd(), '.credentials.json');

export function authenticateKey(scope : Array<string>){
	
	const auth = new google.auth.GoogleAuth({
		keyFile: CREDENTIALS,
		scopes: scope,
	});


	return auth
}
