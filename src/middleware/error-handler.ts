import { NextFunction, Request, Response } from "express";

export class ErrorHandler {
  static catchError(fn) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next).catch(next));
    };
  }
  static handleError(fn) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next).catch(next));
    };
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
