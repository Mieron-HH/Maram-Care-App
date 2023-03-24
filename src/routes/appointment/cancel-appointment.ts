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
	"/api/appointment/cancelAppointment",
	currentUser,
	[
		body("appointmentID")
			.notEmpty()
			.withMessage("Appointment ID must be provided")
			.custom((input) => mongoose.Types.ObjectId.isValid(input))
			.withMessage("Invalid appointment ID"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		if (!req.currentUser) throw new BadRequestError("User not authenticated");
		const { id } = req.currentUser;
		const existingUser = await User.findById(id);
		if (!existingUser) throw new BadRequestError("User does not exist");

		const { appointmentID } = req.body;

		const existingAppointment = await Appointment.findById(appointmentID);
		if (!existingAppointment)
			throw new BadRequestError("Appointment does not exists");
		if (existingAppointment.user != existingUser.id)
			throw new BadRequestError("User not authorized to cancel");

		existingAppointment.set({
			status: "cancelled",
		});

		try {
			existingAppointment.save();

			res.status(200).send(existingAppointment);
		} catch (error) {
			console.log(error);
			throw new BadRequestError("Appointment not cancelled");
		}
	}
);

export { router as cancelAppointmentRouter };
