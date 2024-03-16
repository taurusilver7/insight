import express from "express";
import authorRoute from "./author";

const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json("Welcome to the routes!");
});

router.use("/authors", authorRoute);

export default router;
