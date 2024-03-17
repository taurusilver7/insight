import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";

import * as middleware from "./middleware";
import mainRoute from "./routes/index";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", mainRoute);

app.use("*", (req: Request, res: Response) => {
	res.status(404).json({
		success: false,
		message: "Invalid route!",
	});
});

export default app;
