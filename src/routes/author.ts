import express from "express";
import { AuthorsController } from "../controllers/author";
import { ErrorHandler } from "../utils/error-handler";

const router = express.Router();
const authorController = new AuthorsController();

router.get("/", authorController.getAuthors);
router.get("/:id", ErrorHandler.handleError(authorController.getAuthor));

export default router;
