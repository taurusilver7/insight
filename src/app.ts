import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import { ResponseUtil } from "./utils/response";
import mainRoute from "./routes/index";

import { EntityNotFoundError } from "typeorm";

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

// define a middleware function to handle errors
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof EntityNotFoundError) {
    return ResponseUtil.sendError(res, 404, err);
  }

  return res.status(500).json({
    success: false,
    message: "Not Found!!",
  });
});

export default app;
