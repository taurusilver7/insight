import express from "express";
import { AuthorsController } from "../controllers/author";

const router = express.Router();
const authorController = new AuthorsController();

router.get("/", authorController.getAuthor);

export default router;
