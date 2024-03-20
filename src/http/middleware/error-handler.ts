import { EntityNotFoundError } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { ResponseUtil } from "../../utils/response";

export class ErrorHandler {
  static catchError(fn) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next).catch(next));
    };
  }
  static handleError(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof EntityNotFoundError) {
      return ResponseUtil.sendError<Error>(res, 404, err);
    }

    if (err.message === "Invalid file type") {
      return ResponseUtil.sendError<Error>(res, 422, err);
    }

    return res.status(500).json({
      success: false,
      message: `🔍 - Not Found!!`,
    });
  }

  static formatError(err: any) {
    const errors = {};
    err.forEach((e) => {
      if (!errors[e.property]) {
        errors[e.property] = [];
      }
      errors[e.property].push(e.constraints[Object.keys(e.constraints)[0]]);
    });
    return errors;
  }
}
