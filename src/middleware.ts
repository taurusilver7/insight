import { NextFunction, Request, Response } from "express";

interface ErrorResponse {
	message: string;
	stack?: string;
}

export function notFound(req: Request, res: Response, next: NextFunction) {
	res.status(404);
	const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
	next(error);
	res.json({ success: false, message: error });
}

// eslint-disable-next-line @typescript-eslint/no-unuser-vars
export function errorHandler(
	err: Error,
	req: Request,
	res: Response<ErrorResponse>,
	next: NextFunction
) {
	const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
	});
}
