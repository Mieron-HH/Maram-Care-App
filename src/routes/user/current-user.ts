import express from "express";
import { currentUser } from "@kmalae.ltd/library";

const router = express.Router();

router.get("/api/user/currentUser", currentUser, (req, res) => {
	res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
