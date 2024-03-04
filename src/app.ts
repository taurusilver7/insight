import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";

const app: Express = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
	return res.status(200).json({
		message: "Hello World! 🦄🌈✨👋✨🌈🦄 ",
	});
});

export default app;
