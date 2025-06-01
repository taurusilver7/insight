import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MongoDb connected, ✅");
		app.listen(port, () =>
			console.log(`Server connected at http://localhost:${port}`)
		);
	})
	.catch((err) => console.error("MonogoDB Error,❌", err));
 