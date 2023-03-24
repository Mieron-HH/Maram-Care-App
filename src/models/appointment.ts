import mongoose from "mongoose";

export interface AppointmentAtrr {
	user: string;
	doctor: string;
	date: Date;
	time: string;
	status: string;
}

export interface AppointmentDoc extends AppointmentAtrr, mongoose.Document {
	version: number;
}

interface AppoipntmentModel extends mongoose.Model<AppointmentDoc> {
	build(attr: AppointmentAtrr): AppointmentDoc;
}

const appointmentSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
		doctor: { type: mongoose.Types.ObjectId, required: true, ref: "Doctor" },
		date: { type: Date, required: true },
		time: { type: String, required: true },
		status: { type: String, required: true, lowercaswe: true, trim: true },
	},
	{
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
			},
		},
	}
);

appointmentSchema.index({ user: 1, doctor: 1 });
appointmentSchema.set("versionKey", "version");

appointmentSchema.statics.build = (attr: AppointmentAtrr) => {
	return new Appointment(attr);
};

export const Appointment = mongoose.model<AppointmentDoc, AppoipntmentModel>(
	"Appointment",
	appointmentSchema
);
