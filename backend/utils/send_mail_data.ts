import {google} from 'googleapis';
import { authenticateKey } from './authenticate.ts';

const SCOPE = ['https://mail.google.com/']

export async function sendMailData(){

	// Authenticate/Identify self 
	const auth = authenticateKey(SCOPE)

	// Connect and Create API Object
	const googleMail = google.gmail({
		version: 'v1',
		auth,
	});

}

sendMailData()
