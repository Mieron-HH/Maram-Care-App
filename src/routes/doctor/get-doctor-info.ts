import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { body } from "express-validator";

// importing models
import { Doctor } from "../../models/doctor";

// importing error-types and middlewares
import { BadRequestError, validateRequest } from "@kmalae.ltd/library";

const router = express.Router();

router.post(
	"/api/doctor/getDoctorInfo",
	[
		body("doctorID")
			.notEmpty()
			.withMessage("Doctor's ID must be provided")
			.custom((input) => mongoose.Types.ObjectId.isValid(input))
			.withMessage("Invalid doctor's ID"),
	],
	validateRequest,
	async (req: Request, res: Response) => {
		const { doctorID } = req.body;
		const doctor = await Doctor.findById(doctorID);
		if (!doctor) throw new BadRequestError("Doctor does not exist");

		res.status(200).send(doctor);
	}
);

export { router as getDoctorInfoRouter };
