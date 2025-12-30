import type { FormSubmission } from "../../interface";
import { createTransport } from "nodemailer";

export async function sendMailData(formSubmission : FormSubmission){
	const userEmail = process.env.GMAILEMAIL
	const userPass = process.env.GMAILPASS
	const transporter = createTransport({
		service: 'gmail',
		auth: {
			user: userEmail,
			pass: userPass
		},
	});

	const htmlMessage = [
		`<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#ffffff;color:#000;">`,
			`<h3>New Booking Request Received</h3>`,
		`  <p><strong>From: ${formSubmission.firstName} ${formSubmission.lastName} </strong> </p>`,
		`  <p><strong>Message:</strong> </p>`,
		`  <p>${formSubmission.description}</p>`,
		`  <p><strong>Reply back at: ${formSubmission.email}</strong> </p>`,
		`</body>`,
	]

	const htmlMessageString = htmlMessage.join('\n')

	
	// Send an email using async/await
	const info = await transporter.sendMail({
		from: `"Zuko" <${userEmail}>`,
		to: `${userEmail}`,
		subject: `BOOKING REQUEST FROM ${formSubmission.firstName} ${formSubmission.lastName}`,
		text: "Hello world?", // Plain-text version of the message
		html:htmlMessageString, // HTML version of the message
	});

	console.log("Message sent:", info.messageId);
}
