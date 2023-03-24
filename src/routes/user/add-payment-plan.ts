import express, { Request, Response } from "express";
import { body } from "express-validator";

// importing Models and Services
import { User } from "../../models/user";

// importing error-types and middlewares
import {
	BadRequestError,
	currentUser,
	validateRequest,
} from "@kmalae.ltd/library";

const router = express.Router();

router.post(
	"/api/user/addPaymentPlan",
	currentUser,
	[
		body("paymentPlan")
			.notEmpty()
			.withMessage("Payment plan must be provided"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		if (!req.currentUser) throw new BadRequestError("User not authenticated");
		const { id } = req.currentUser;
		const existingUser = await User.findById(id);
		if (!existingUser) throw new BadRequestError("User does not exist");

		const { paymentPlan } = req.body;

		existingUser.set({
			paymentPlan,
		});

		try {
			await existingUser.save();

			return res.status(200).send(existingUser);
		} catch (error) {
			console.log(error);
			throw new BadRequestError("Payment plan not added");
		}
	}
);

export { router as addPaymentPlanRouter };
