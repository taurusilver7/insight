import { Request, Response } from "express";

import { Author } from "../entities/author";
import { ResponseUtil } from "../utils/response";
import { AppDataSource } from "../db/data-source";

export class AuthorsController {
	async getAuthors(req: Request, res: Response) {
		const authors = await AppDataSource.getRepository(Author).find();

		return ResponseUtil.sendResponse(res, "Authors fetched!", authors);
	}

	async getAuthor(req: Request, res: Response) {
		const { id } = req.params;

		const author = await AppDataSource.getRepository(Author).findOneByOrFail({
			id: Number(id),
		});
		return ResponseUtil.sendResponse<Author>(
			res,
			"Author info fetched",
			author
		);
	}
}
