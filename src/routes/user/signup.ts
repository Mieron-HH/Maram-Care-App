import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";

// importing models
import { User } from "../../models/user";

// importing from custom library
import { validateRequest, BadRequestError } from "@kmalae.ltd/library";

const router = express.Router();

router.post(
	"/api/user/signup",
	[
		body("phoneNumber")
			.notEmpty()
			.withMessage("Phone number must be provided")
			.isMobilePhone("ar-AE")
			.withMessage("Invalid phone number"),
		body("email")
			.notEmpty()
			.withMessage("Email must be provided")
			.isEmail()
			.withMessage("Invalid email address"),
		body("password")
			.notEmpty()
			.withMessage("Password must be provided")
			.isLength({ min: 6 })
			.withMessage("Password must be at least 6 characters"),
		body("fullName")
			.notEmpty()
			.withMessage("Full name must be provided")
			.custom((input: string) => {
				const [firstName, lastName] = input.split(" ");
				return firstName.length >= 2 && lastName.length >= 2;
			})
			.withMessage("First or last name can never be less than 2 characters"),
		body("DOB")
			.notEmpty()
			.withMessage("Date of birth must be provided")
			.isISO8601()
			.withMessage("Incorrect date format")
			.exists()
			.isDate()
			.withMessage("Invalid date of birth"),
		body("gender")
			.notEmpty()
			.withMessage("Gender must be provided")
			.custom((input: string) => {
				return (
					input.toLowerCase() === "male" ||
					input.toLowerCase() === "female"
				);
			}),
		body("city").notEmpty().withMessage("City must be provided"),
		body("address").notEmpty().withMessage("Address must be provided"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		const {
			fullName,
			DOB,
			phoneNumber,
			email,
			password,
			gender,
			city,
			address,
		} = req.body;

		const existingUser = await User.findOne({ email });
		if (existingUser) throw new BadRequestError("Email already exists");

		const user = User.build({
			phoneNumber,
			email,
			password,
			fullName,
			DOB,
			gender,
			city,
			address,
		});

		try {
			await user.save();

			const userJwt = jwt.sign(
				{ id: user.id, email: user.email },
				process.env.JWT_KEY!
			);

			// Store JWT on session object
			req.session = {
				jwt: userJwt,
			};

			return res.status(201).send(user);
		} catch (error) {
			console.log({ error });
			throw new BadRequestError("User not registered");
		}
	}
);

export { router as signupRouter };
