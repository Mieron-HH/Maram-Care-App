import express, { Request, Response } from "express";

// importing error-types and middlewares
import { Doctor } from "../../models/doctor";

const router = express.Router();

router.get("/api/doctor/getTopDoctors", async (req: Request, res: Response) => {
	const doctors = await Doctor.find()
		.sort({ patientCount: -1, yearExperience: -1 })
		.limit(3);

	res.status(200).send(doctors);
});

export { router as getTopDoctorsRouter };
