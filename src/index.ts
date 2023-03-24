import mongoose from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import { app } from "./app";

app.listen(3000, async () => {
	if (!process.env.JWT_KEY) throw new Error("JWT_KEY must be defined");

	if (!process.env.MONGO_URI) throw new Error("MONGO_URI must be defined");

	try {
		await mongoose.connect(process.env.MONGO_URI, {
			dbName: "Maram_Care_DB",
		});
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
});
