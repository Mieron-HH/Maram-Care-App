import mongoose from "mongoose";

export interface DoctorAttr {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	profession: string;
	patientCount: number;
	yearsExperience: number;
	doctorImage: {
		data: Buffer;
		contentType: string;
	};
	doctorImageNoBG: {
		data: Buffer;
		contentType: string;
	};
}

export interface DoctorDoc extends DoctorAttr, mongoose.Document {
	version: number;
}

interface DoctorModel extends mongoose.Model<DoctorDoc> {
	build(attr: DoctorAttr): DoctorDoc;
}

const doctorSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true, lowercase: true, trim: true },
		lastName: { type: String, required: true, lowercase: true, trim: true },
		email: { type: String, required: true, lowercaswe: true, trim: true },
		phoneNumber: {
			type: String,
			required: true,
			lowercase: true,
			trim: true,
		},
		profession: { type: String, required: true },
		patientCount: { type: Number, required: true },
		yearsExperience: { type: Number, required: true },
		doctorImage: { type: Object, required: true },
		doctorImageNoBG: { type: Object, required: true },
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

doctorSchema.index({ email: 1 });
doctorSchema.set("versionKey", "version");

doctorSchema.statics.build = (attr: DoctorAttr) => {
	return new Doctor(attr);
};

export const Doctor = mongoose.model<DoctorDoc, DoctorModel>(
	"Doctor",
	doctorSchema
);
