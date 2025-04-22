import { redirect } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

/* @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const subject = data.get('subject')?.toString() || 'No subject';
		const message = data.get('message')?.toString() || 'No message';
		const sender = data.get('sender')?.toString() || 'No sender';

		const transporter = nodemailer.createTransport({
			service: 'gmail', 
			auth: {
				user: "ndhfwebpage@gmail.com",
				pass: 'yidv gkmo oekw axzc' // Use an app password, NOT your main password
			}
		});

		try {
			await transporter.sendMail({
				from: `"Portfolio Contact" <ndhfwebpage@gmail.com>`,
				to: 'ndh8546@g.rit.edu', 
				subject: subject,
				text: `From: ${sender}\n\n${message}`
			});
			console.log("Email sent successfully.");
			throw redirect(303, './email_sent');
		} catch (error) {
			console.error("Error sending email:", error);
		}
	}
};
