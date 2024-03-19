import express from "express";
import { AuthorsController } from "../controllers/author";
import { ErrorHandler } from "../utils/error-handler";
import { FileUploader } from "../middleware/file-upload";

const router = express.Router();
const authorController = new AuthorsController();

router.get("/", ErrorHandler.handleError(authorController.getAuthors));
router.get("/:id", ErrorHandler.handleError(authorController.getAuthor));
router.post(
  "/",
  FileUploader.upload("image", "author", 2 * 1024 * 1024),
  ErrorHandler.handleError(authorController.createAuthor)
);

export default router;
