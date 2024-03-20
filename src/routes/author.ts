import express from "express";
import { AuthorsController } from "../http/controllers/author";
import { ErrorHandler } from "../http/middleware/error-handler";
import { FileUploader } from "../http/middleware/file-upload";

const router = express.Router();
const authorController = new AuthorsController();

router.get("/", ErrorHandler.catchError(authorController.getAuthors));
router.get("/:id", ErrorHandler.catchError(authorController.getAuthor));
router.post(
  "/",
  FileUploader.upload("image", "author", 2 * 1024 * 1024),
  ErrorHandler.catchError(authorController.createAuthor)
);
router.put("/:id", ErrorHandler.catchError(authorController.updateAuthor));
router.delete("/:id", ErrorHandler.catchError(authorController.deleteAuthor));

export default router;
