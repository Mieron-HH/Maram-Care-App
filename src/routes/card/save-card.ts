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
	"/api/card/saveCard",
	currentUser,
	[
		body("cardHolderName")
			.notEmpty()
			.withMessage("card holder name must be provided")
			.custom((input: string) => {
				const [firstName, lastName] = input.split(" ");
				return firstName.length >= 2 && lastName.length >= 2;
			})
			.withMessage("first or last name can never be less than 2 characters"),
		body("cardNumber")
			.notEmpty()
			.withMessage("card number must be provided")
			.isNumeric()
			.withMessage("card number must contain digits only")
			.isLength({ min: 16, max: 16 })
			.withMessage("invalid card number"),
		body("expiryDate")
			.notEmpty()
			.withMessage("must be provided")
			.custom((input) => {
				if (!/^\d{2}\/\d{2}$/.test(input)) return false;

				const [month, year] = input.split("/").map(Number);
				if (month < 1 || month > 12) return false;

				const currentYear = new Date().getFullYear() % 100;
				if (year < currentYear || year > currentYear + 10) return false;

				return true;
			})
			.withMessage("invalid expiry date"),
		body("CVC")
			.notEmpty()
			.withMessage("security code required")
			.isNumeric()
			.withMessage("digits only")
			.isLength({ min: 3, max: 3 })
			.withMessage("invalid CVC number"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		if (!req.currentUser) throw new BadRequestError("User not authenticated");
		const { id } = req.currentUser;
		const existingUser = await User.findById(id);
		if (!existingUser) throw new BadRequestError("User does not exist");

		const { cardHolderName, cardNumber, expiryDate, CVC } = req.body;

		const existingCard = await Card.findOne({ cardNumber });
		if (existingCard) throw new BadRequestError("Card already exists");

		const card = Card.build({
			user: existingUser.id,
			cardHolderName,
			cardNumber,
			expiryDate,
			CVC,
		});

		try {
			await card.save();

			return res.status(201).send(card);
		} catch (error) {
			console.log({ error });
			throw new BadRequestError("Card not saved");
		}
	}
);

export { router as saveCardRouter };
