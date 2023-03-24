import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { body } from "express-validator";

// importing models
import { User } from "../../models/user";
import { Card } from "../../models/card";

// importing from custom library
import {
	validateRequest,
	BadRequestError,
	currentUser,
} from "@kmalae.ltd/library";

const router = express.Router();

router.post(
	"/api/card/deleteCard",
	currentUser,
	[
		body("cardID")
			.notEmpty()
			.withMessage("Card ID must be provided")
			.custom((input) => mongoose.Types.ObjectId.isValid(input))
			.withMessage("Invalid card ID"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		if (!req.currentUser) throw new BadRequestError("User not authenticated");
		const { id } = req.currentUser;
		const existingUser = await User.findById(id);
		if (!existingUser) throw new BadRequestError("User does not exist");

		const { cardID } = req.body;

		const existingCard = await Card.findById(cardID);
		if (!existingCard) throw new BadRequestError("Card does not exists");
		if (existingCard.user != existingUser.id)
			throw new BadRequestError("User not authorized to delete");

		try {
			await Card.findByIdAndDelete(existingCard.id);

			res.status(200).send({});
		} catch (error) {
			throw new BadRequestError("Card not deleted");
		}
	}
);

export { router as deleteCardRouter };
