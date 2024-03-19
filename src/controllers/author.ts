import { Request, Response } from "express";

import { Author } from "../entities/author";
import { ResponseUtil } from "../utils/response";
import { AppDataSource } from "../db/data-source";
import { Paginator } from "../db/pagination";

export class AuthorsController {
  async getAuthors(req: Request, res: Response) {
    const builder = AppDataSource.getRepository(Author).createQueryBuilder().orderBy("id", "DESC");
    const { records: authors, paginationInfo } = await Paginator.paginate(builder, req);

    return ResponseUtil.sendResponse(res, "Authors fetched!", authors, paginationInfo);
  }

  async getAuthor(req: Request, res: Response) {
    const { id } = req.params;

    const author = await AppDataSource.getRepository(Author).findOneByOrFail({
      id: Number(id),
    });
    return ResponseUtil.sendResponse<Author>(res, "Author info fetched", author);
  }
  async createAuthor(req: Request, res: Response): Promise<Response> {
    const authorData = req.body;

    const repo = AppDataSource.getRepository(Author);
    const author = repo.create(authorData);
    await repo.save(author);

    return ResponseUtil.sendResponse(res, "Author created successfully!", author, 200);
  }
}
