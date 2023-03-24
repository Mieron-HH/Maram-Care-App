import express, { Request, Response } from "express";

// importing models
import { User } from "../../models/user";
import { HealthProfile } from "../../models/health-profile";

// importing type-errors and middlewares
import { BadRequestError, currentUser } from "@kmalae.ltd/library";

const router = express.Router();

router.get(
	"/api/health/getUserHealthProfiles",
	currentUser,
	async (req: Request, res: Response) => {
		if (!req.currentUser) throw new BadRequestError("User not authenticated");
		const { id } = req.currentUser;
		const existingUser = await User.findById(id);
		if (!existingUser) throw new BadRequestError("User does not exist");

		const existingHealthProfiles = await HealthProfile.find({
			creator: existingUser.id,
		});
		if (!existingHealthProfiles)
			throw new BadRequestError("User does not health profiles");

		res.status(200).send(existingHealthProfiles);
	}
);

export { router as getUserHealthProfilesRouter };
