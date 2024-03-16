import { Request, Response } from "express";
import { AppDataSource } from "../db/data-source";
import { Author } from "../entities/author";

export class AuthorsController {
	async getAuthor(req: Request, res: Response) {
		const authors = await AppDataSource.getRepository(Author).find();

		return res.status(200).json({
			success: true,
			message: "Fetched authors successfully",
			data: authors,
		});
	}
}
