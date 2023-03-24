import express, { Request, Response } from "express";

// importing models
import { User } from "../../models/user";
import { Appointment } from "../../models/appointment";

// importing type-errors and middlewares
import { BadRequestError, currentUser } from "@kmalae.ltd/library";

const router = express.Router();

router.get(
	"/api/appointment/getUserAppointments",
	currentUser,
	async (req: Request, res: Response) => {
		if (!req.currentUser) throw new BadRequestError("User not authenticated");
		const { id } = req.currentUser;
		const existingUser = await User.findById(id);
		if (!existingUser) throw new BadRequestError("User does not exist");

		const existingAppointments = await Appointment.find({
			user: existingUser.id,
			status: "active",
		})
			.sort({ date: 1 })
			.populate("doctor");
		if (!existingAppointments)
			throw new BadRequestError("User does not have appointments");

		res.status(200).send(existingAppointments);
	}
);

export { router as getUserAppointmentsRouter };
