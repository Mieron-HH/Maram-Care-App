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
	"/api/health/createHealthProfile",
	currentUser,
	[
		body("fullName")
			.notEmpty()
			.withMessage("Full name must be provided")
			.custom((input: string) => {
				const [firstName, lastName] = input.split(" ");
				return firstName.length >= 2 && lastName.length >= 2;
			})
			.withMessage("First or last name can never be less than 2 characters"),
		body("relative").notEmpty().withMessage("Relative must be provided"),
		body("gender")
			.notEmpty()
			.withMessage("Gender must be provided")
			.custom((input: string) => {
				return (
					input.toLowerCase() === "male" ||
					input.toLowerCase() === "female"
				);
			}),
		body("DOB")
			.notEmpty()
			.withMessage("Date of birth must be provided")
			.isISO8601()
			.withMessage("Incorrect date format")
			.exists()
			.isDate()
			.withMessage("Invalid date of birth"),
		body("height")
			.notEmpty()
			.withMessage("Height must be provided")
			.isNumeric()
			.withMessage("Height can only be in digits")
			.custom((input) => {
				return input >= 50 && input <= 220;
			})
			.withMessage("Height must be set to a realistic number"),
		body("weight")
			.notEmpty()
			.withMessage("Weight must be provided")
			.isNumeric()
			.withMessage("Weight can only be in digits")
			.custom((input) => {
				return input >= 30 && input <= 150;
			})
			.withMessage("Weight must be set to a realistic number"),
		body("bloodGroup").notEmpty().withMessage("Blood group must be provided"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		if (!req.currentUser) throw new BadRequestError("User not authenticated");
		const { id } = req.currentUser;
		const existingUser = await User.findById(id);
		if (!existingUser) throw new BadRequestError("User does not exist");

		const { fullName, relative, gender, DOB, height, weight, bloodGroup } =
			req.body;

		const existingProfile = await HealthProfile.findOne({
			creator: existingUser.id,
			fullName: fullName.toLowerCase(),
		});
		if (existingProfile)
			throw new BadRequestError("Health profile already exists");

		const healthProfile = HealthProfile.build({
			creator: existingUser.id,
			fullName,
			relative,
			gender,
			DOB,
			height,
			weight,
			bloodGroup,
		});

		try {
			await healthProfile.save();

			return res.status(201).send(healthProfile);
		} catch (error) {
			console.log(error);
			throw new BadRequestError("Health profile not createad");
		}
	}
);

export { router as createHealthProfileRouter };
