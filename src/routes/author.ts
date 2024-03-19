import express from "express";
import { AuthorsController } from "../controllers/author";
import { ErrorHandler } from "../utils/error-handler";

const router = express.Router();
const authorController = new AuthorsController();

router.get("/", ErrorHandler.handleError(authorController.getAuthors));
router.get("/:id", ErrorHandler.handleError(authorController.getAuthor));
router.post("/", ErrorHandler.handleError(authorController.createAuthor));

export default router;
