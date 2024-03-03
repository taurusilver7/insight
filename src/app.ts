import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
	return res.status(200).json({
		message: "Hello World! 🦄🌈✨👋✨🌈🦄 ",
	});
});

export default app;
