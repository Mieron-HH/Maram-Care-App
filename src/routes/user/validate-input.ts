import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { User } from "../../models/user";

// importing from custom library
import { validateRequest, BadRequestError } from "@kmalae.ltd/library";

const router = express.Router();

router.post(
	"/api/user/validateInput",
	[
		body("phoneNumber")
			.optional()
			.isMobilePhone("ar-AE")
			.withMessage("Invalid phone number"),
		body("email").optional().isEmail().withMessage("Invalid email address"),
		body("password")
			.optional()

			.isLength({ min: 6 })
			.withMessage("Password must be at least 6 characters"),
		body("fullName")
			.optional()
			.custom((input: string) => {
				const [firstName, lastName] = input.split(" ");
				return firstName.length >= 2 && lastName.length >= 2;
			})
			.withMessage("Name can never be less than 2 characters"),
		body("DOB")
			.optional()
			.isISO8601()
			.withMessage("Incorrect date format")
			.exists()
			.isDate()
			.withMessage("Invalid date of birth"),
		body("gender")
			.optional()
			.custom((input: string) => {
				return (
					input.toLowerCase() === "male" ||
					input.toLowerCase() === "female"
				);
			})
			.withMessage("Gender must be male or female"),
		body("city")
			.optional()
			.custom((input) => {
				return input !== "";
			})
			.withMessage("City must be provided"),
		body("address")
			.optional()
			.custom((input) => {
				return input.length >= 4;
			})
			.withMessage("Address must be at least 4 characters"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		const { email } = req.body;
		if (email) {
			const existingUser = await User.findOne({ email });
			if (existingUser) throw new BadRequestError("Email already exists");
		}

		res.status(200).send({});
	}
);

export { router as validateInputRouter };
