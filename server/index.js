import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/user.js";
import ticketRoutes from "./routes/ticket.js";

import { serve } from "inngest/express";
import { inngest } from "./inngest/client.js";

import { onUserSignup } from "./inngest/functions/on-signup";
import { onTicketCreated } from "./inngest/functions/on-ticket-create";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

// middleware
app.use("/api/auth", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use(
	"/api/inngest",
	serve({
		client: inngest,
		functions: [onUserSignup, onTicketCreated],
	})
);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MongoDb connected, ✅");
		app.listen(port, () =>
			console.log(`Server connected at http://localhost:${port}`)
		);
	})
	.catch((err) => console.error("MonogoDB Error,❌", err));
