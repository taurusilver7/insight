import { Request, Response } from "express";

import { Author } from "../../db/entities/author";
import { ResponseUtil } from "../../utils/response";
import { AppDataSource } from "../../db/data-source";
import { Paginator } from "../../db/pagination";
import { CreateAuthorDTO, UpdateAuthorDTO } from "../dto/create-author";
import { validate } from "class-validator";

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
    authorData.image = req.file?.filename;

    const dto = new CreateAuthorDTO();
    Object.assign(dto, authorData);

    const errors = await validate(dto);
    if (errors.length > 0) {
      return ResponseUtil.sendError(res, 422, errors);
    }

    const repo = AppDataSource.getRepository(Author);
    const author = repo.create(authorData);
    await repo.save(author);

    return ResponseUtil.sendResponse(res, "Author created successfully!", author);
  }

  async updateAuthor(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const authorData = req.body;

    const dto = new UpdateAuthorDTO();
    Object.assign(dto, authorData);

    const errors = await validate(dto);
    if (errors.length > 0) {
      return ResponseUtil.sendError(res, 422, errors);
    }

    const repo = AppDataSource.getRepository(Author);

    const author = await repo.findOneByOrFail({
      id: Number(id),
    });

    repo.merge(author, authorData);
    await repo.save(author);

    return ResponseUtil.sendResponse(res, "Author updated", author);
  }
  async deleteAuthor(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const repo = AppDataSource.getRepository(Author);

    const author = await repo.findOneByOrFail({
      id: Number(id),
    });
    await repo.remove(author);

    return ResponseUtil.sendResponse(res, "Author removed", null);
  }
}
