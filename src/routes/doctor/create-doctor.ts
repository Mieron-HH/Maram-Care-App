import mongoose from "mongoose";
import express, { Request, Response, NextFunction } from "express";
import { body } from "express-validator";
import multer from "multer";
import fs from "fs";
import path from "path";

// importing models
import { Doctor } from "../../models/doctor";

// importing type-errors and middlewares
import { BadRequestError, validateRequest } from "@kmalae.ltd/library";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

const validateImage = (req: Request, res: Response, next: NextFunction) => {
	if (!req.files) {
		throw new BadRequestError("Doctor's images must be provided");
	}

	// @ts-ignore
	if (!req.files.doctorImage)
		throw new BadRequestError("Doctor's image must be provided");
	if (
		// @ts-ignore
		req.files.doctorImage[0]!.mimetype.split("/")[0].toLowerCase() !== "image"
	)
		throw new BadRequestError("Doctor's image must be an image");

	// @ts-ignore
	if (!req.files.doctorImageNoBG)
		throw new BadRequestError("Doctor's image with no BG must be provided");
	if (
		// @ts-ignore
		req.files.doctorImageNoBG[0]!.mimetype.split("/")[0].toLowerCase() !==
		"image"
	)
		throw new BadRequestError("Doctor's image with no BG must be an image");

	for (let file in req.files) {
		// @ts-ignore
		const imageFile = req.files[file][0]!;
		const acceptedImageFormat = ["jpeg", "jpg", "png"];
		const fileExtension = imageFile.mimetype.split("/").pop()!.toLowerCase();
		if (!acceptedImageFormat.includes(fileExtension!)) {
			throw new BadRequestError("Invalid image format");
		}
	}

	next();
};

router.post(
	"/api/doctor/createDoctor",
	upload.fields([
		{ name: "doctorImage", maxCount: 1 },
		{ name: "doctorImageNoBG", maxCount: 1 },
	]),
	[
		body("firstName")
			.notEmpty()
			.withMessage("First name must be provided")
			.isLength({ min: 2 })
			.withMessage("Name must be at least 2 characters"),
		body("lastName")
			.notEmpty()
			.withMessage("Last name must be provided")
			.isLength({ min: 2 })
			.withMessage("Name must be at least 2 characters"),
		body("email")
			.notEmpty()
			.withMessage("Email must be provided")
			.isEmail()
			.withMessage("Invalid email"),
		body("phoneNumber")
			.notEmpty()
			.withMessage("Phone number must be provided")
			.isMobilePhone("ar-AE")
			.withMessage("Invalid phone number"),
		body("profession")
			.notEmpty()
			.withMessage("Profession must be provided")
			.isLength({ min: 5 })
			.withMessage("Profession must be at least 5 characters"),
		body("patientCount")
			.notEmpty()
			.withMessage("Patient count must be provided")
			.isNumeric()
			.withMessage("Patient count must be numeric")
			.custom((input) => input >= 0)
			.withMessage("Patient count cannot be negative"),
		body("yearsExperience")
			.notEmpty()
			.withMessage("Years of experience must be provided")
			.isNumeric()
			.withMessage("Years of experience must be numeric")
			.custom((input) => input >= 0)
			.withMessage("Years of experience cannot be negative"),
	],
	validateRequest,
	validateImage,
	async (req: Request, res: Response) => {
		const {
			firstName,
			lastName,
			email,
			phoneNumber,
			profession,
			patientCount,
			yearsExperience,
		} = req.body;
		const existingDoctor = await Doctor.findOne({ email });
		if (existingDoctor)
			throw new BadRequestError("Doctor email already exists");

		// @ts-ignore
		const doctorImage = req.files.doctorImage[0];
		const imageFormat = doctorImage!.mimetype;
		const doctorImageBuffer = fs.readFileSync(
			path.join("uploads/" + doctorImage!.filename)
		) as Buffer;

		// @ts-ignore
		const doctorImageNoBG = req.files.doctorImageNoBG[0];
		const imageFormatNoBG = doctorImageNoBG!.mimetype;
		const doctorImageBufferNoBG = fs.readFileSync(
			path.join("uploads/" + doctorImageNoBG!.filename)
		) as Buffer;

		const doctor = Doctor.build({
			firstName,
			lastName,
			email,
			phoneNumber,
			profession,
			patientCount,
			yearsExperience,
			doctorImage: {
				data: doctorImageBuffer,
				contentType: imageFormat,
			},
			doctorImageNoBG: {
				data: doctorImageBufferNoBG,
				contentType: imageFormatNoBG,
			},
		});

		try {
			await doctor.save();

			return res.status(201).send(doctor);
		} catch (error) {
			console.log(error);
		}
	}
);

export { router as createDoctorRouter };
