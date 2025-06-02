import express from "express";
import {
	getUsers,
	login,
	logout,
	signup,
	updateUser,
} from "../controllers/user.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.get("/users", authenticate, getUsers);
router.get("/update-user", authenticate, updateUser);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
