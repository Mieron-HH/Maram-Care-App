import express, { Request, Response } from "express";

// importing models
import { User } from "../../models/user";
import { Card } from "../../models/card";

// importing type-errors and middlewares
import { BadRequestError, currentUser } from "@kmalae.ltd/library";

const router = express.Router();

router.get(
	"/api/card/getUserCards",
	currentUser,
	async (req: Request, res: Response) => {
		if (!req.currentUser) throw new BadRequestError("User not authenticated");
		const { id } = req.currentUser;
		const existingUser = await User.findById(id);
		if (!existingUser) throw new BadRequestError("User does not exist");

		const existingCards = await Card.find({
			user: existingUser.id,
		});
		if (!existingCards)
			throw new BadRequestError("User does not saved cards");

		res.status(200).send(existingCards);
	}
);

export { router as getUserCardsRouter };
