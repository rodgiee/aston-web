import { createTransport } from "nodemailer";

export function sendMailData(){
	const userEmail = process.env.GMAILEMAIL
	const userPass = process.env.GMAILPASS
	const transporter = createTransport({
		service: 'gmail',
		auth: {
			user: userEmail,
			pass: userPass
		},
	});

	// Send an email using async/await
	(async () => {
		const info = await transporter.sendMail({
			from: `"Rodge Rebeca" <${userEmail}>`,
			to: `${userEmail}`,
			subject: "Hello ✔",
			text: "Hello world?", // Plain-text version of the message
			html: "<b>Hello world?</b>", // HTML version of the message
		});

		console.log("Message sent:", info.messageId);
	})();
}

sendMailData()
