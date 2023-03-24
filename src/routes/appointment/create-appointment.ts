import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { body } from "express-validator";

// importing models
import { User } from "../../models/user";
import { Appointment } from "../../models/appointment";

// importing from custom library
import {
	validateRequest,
	BadRequestError,
	currentUser,
} from "@kmalae.ltd/library";

const router = express.Router();

router.post(
	"/api/appointment/createAppointment",
	currentUser,
	[
		body("doctor")
			.notEmpty()
			.withMessage("Doctor ID must be provided")
			.custom((input) => mongoose.Types.ObjectId.isValid(input))
			.withMessage("Invalid doctor ID"),
		body("date")
			.notEmpty()
			.withMessage("Date must be provided")
			.isISO8601()
			.withMessage("Incorrect date format")
			.exists()
			.withMessage("Invalid date format"),
		body("time")
			.notEmpty()
			.withMessage("Time must be provided")
			.custom((input) => /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/.test(input))
			.withMessage("Invalid time format"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		if (!req.currentUser) throw new BadRequestError("User not authenticated");
		const { id } = req.currentUser;
		const existingUser = await User.findById(id);
		if (!existingUser) throw new BadRequestError("User does not exist");

		const { doctor, date, time } = req.body;

		const appointment = Appointment.build({
			user: existingUser.id,
			doctor,
			date,
			time,
			status: "active",
		});

		try {
			await appointment.save();

			return res.status(201).send(appointment);
		} catch (error) {
			console.log({ error });
			throw new BadRequestError("Appointment not created");
		}
	}
);

export { router as createAppointmentRouter };
