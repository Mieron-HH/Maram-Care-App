import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import cookieSession from "cookie-session";

// importing routes
import { signupRouter } from "./routes/user/signup";
import { signinRouter } from "./routes/user/signin";
import { currentUserRouter } from "./routes/user/current-user";
import { validateInputRouter } from "./routes/user/validate-input";
import { addPaymentPlanRouter } from "./routes/user/add-payment-plan";
import { signoutRouter } from "./routes/user/signout";

import { getInfoRouter } from "./routes/user/get-info";
import { getDoctorInfoRouter } from "./routes/doctor/get-doctor-info";
import { createDoctorRouter } from "./routes/doctor/create-doctor";
import { updateDoctorRouter } from "./routes/doctor/update-doctor";
import { getTopDoctorsRouter } from "./routes/doctor/get-top-doctors";

import { saveCardRouter } from "./routes/card/save-card";
import { getUserCardsRouter } from "./routes/card/get-user-cards";
import { validateCardRouter } from "./routes/card/validate-card";
import { deleteCardRouter } from "./routes/card/delete-card";

import { createAppointmentRouter } from "./routes/appointment/create-appointment";
import { cancelAppointmentRouter } from "./routes/appointment/cancel-appointment";
import { getUserAppointmentsRouter } from "./routes/appointment/get-user-appointments";

import { createHealthProfileRouter } from "./routes/health-profile/create-health-profile";
import { getUserHealthProfilesRouter } from "./routes/health-profile/get-user-health-profiles";
import { validateHealthProfileInputRouter } from "./routes/health-profile/validate-health-profile-input";

// importing error-types and middlewares
import { errorHandler, NotFoundError } from "@kmalae.ltd/library";

const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(
	cookieSession({
		signed: false,
		secure: false,
	})
);

// USER routes
app.use(signupRouter);
app.use(signinRouter);
app.use(currentUserRouter);
app.use(validateInputRouter);
app.use(getInfoRouter);
app.use(addPaymentPlanRouter);
app.use(signoutRouter);

// DOCTOR routes
app.use(createDoctorRouter);
app.use(getDoctorInfoRouter);
app.use(updateDoctorRouter);
app.use(getTopDoctorsRouter);

// CARD routes
app.use(saveCardRouter);
app.use(getUserCardsRouter);
app.use(validateCardRouter);
app.use(deleteCardRouter);

// APPOINTMENT routes
app.use(createAppointmentRouter);
app.use(cancelAppointmentRouter);
app.use(getUserAppointmentsRouter);

// HEALTH PROFILE routes
app.use(createHealthProfileRouter);
app.use(getUserHealthProfilesRouter);
app.use(validateHealthProfileInputRouter);

app.all("*", async (req, res, next) => {
	throw new NotFoundError();
});

app.use(errorHandler);

export { app };
