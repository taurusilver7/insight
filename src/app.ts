import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";

import * as middleware from "./middleware";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/hello", (req, res) => {
	return res.status(200).json({
		message: "Hello World! 🦄🌈✨👋✨🌈🦄 ",
	});
});

app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
