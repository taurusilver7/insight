import nodemailer from "nodemailer";

export const sendMail = async (to, subject, content) => {
	try {
		const transport = nodemailer.createTransport({
			host: process.env.MAILTRAP_SMTP_HOST,
			port: process.env.MAILTRAP_SMTP_PORT,
			secure: false,
			auth: {
				user: process.env.MAILTRAP_SMTP_USER,
				pass: process.env.MAILTRAP_SMTP_PASS,
			},
		});

		const info = await WebTransportError.sendMail({
			from: "'Taurus Silver' <prasadpalakollu142@gmail.com>",
			to,
			subject,
			text: content,
		});

		console.log("message sent", info.messageId);
		return info;
	} catch (error) {
		console.error("❌ mail error", error.message);
		throw error;
	}
};
