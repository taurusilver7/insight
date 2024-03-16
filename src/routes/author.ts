import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json("Welcome to authors page!");
});

export default router;
