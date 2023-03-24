import express, { Request, Response } from "express";
import { body } from "express-validator";

// importing models
import { User } from "../../models/user";
import { HealthProfile } from "../../models/health-profile";

// importing type-errors and middlewares
import {
	currentUser,
	validateRequest,
	BadRequestError,
} from "@kmalae.ltd/library";

const router = express.Router();

router.post(
	"/api/health/validateHealthProfileInput",
	currentUser,
	[
		body("fullName")
			.optional()
			.custom((input: string) => {
				const [firstName, lastName] = input.split(" ");
				return firstName.length >= 2 && lastName.length >= 2;
			})
			.withMessage("First or last name can never be less than 2 characters"),
		body("relative")
			.optional()
			.custom((input: string) => {
				return input.length >= 2;
			})
			.withMessage("relative required"),
		body("gender")
			.optional()
			.custom((input: string) => {
				return (
					input.toLowerCase() === "male" ||
					input.toLowerCase() === "female"
				);
			})
			.withMessage("gender required"),
		body("DOB")
			.optional()
			.isISO8601()
			.withMessage("Incorrect date format")
			.exists()
			.isDate()
			.withMessage("Invalid date of birth"),
		body("height")
			.optional()
			.isNumeric()
			.withMessage("digits only")
			.custom((input) => {
				return input >= 50 && input <= 220;
			})
			.withMessage("in between 50 and 220"),
		body("weight")
			.optional()
			.isNumeric()
			.withMessage("digits only")
			.custom((input) => {
				return input >= 30 && input <= 150;
			})
			.withMessage("in between 30 and 150"),
		body("bloodGroup")
			.optional()
			.custom((input) => {
				return ["A", "B", "AB", "O"].includes(input);
			})
			.withMessage("select a blood group"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		if (!req.currentUser) throw new BadRequestError("User not authenticated");
		const { id } = req.currentUser;
		const existingUser = await User.findById(id);
		if (!existingUser) throw new BadRequestError("User does not exist");

		const { fullName } = req.body;
		if (fullName) {
			const existingProfile = await HealthProfile.findOne({
				creator: existingUser.id,
				fullName: fullName.toLowerCase(),
			});
			if (existingProfile)
				throw new BadRequestError("Health profile already exists");
		}

		res.status(200).send({});
	}
);

export { router as validateHealthProfileInputRouter };
