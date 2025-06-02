import { inngest } from "../client";
import User from "../../models/user.js";
import { NonRetriableError } from "inngest";
import { sendMail } from "../../utils/mailer";

export const onUserSignup = inngest.createFunction(
	{ id: "on-user-signup", retries: 2 },
	{ event: "user/signup" },
	async ({ event, step }) => {
		try {
			const { email } = event.data;
			const user = await step.run("get-user-email", async () => {
				const userObj = await User.findOne({ email });
				if (!userObj) {
					throw new NonRetriableError(
						"User no longer exists in our database"
					);
				}
				return userObj;
			});
			await step.run("send-welcome-email", async () => {
				const subject = `Welcome to the app`;
				const message = `Hi, 
            \n\n
            Thanks for signing up. We're glad to have you onboard.
            `;
				await sendMail(user.email, subject, message);
			});

			return { success: true };
		} catch (error) {
			console.error("❌ Error running steps", error.message);
			return { success: false };
		}
	}
);
