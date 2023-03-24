import mongoose from "mongoose";

export interface HealthProfileAttr {
	creator: string;
	fullName: string;
	relative: string;
	gender: string;
	DOB: string;
	height: number;
	weight: number;
	bloodGroup: string;
	profileImage?: {
		data: Buffer;
		contentType: string;
	};
	heartRate?: number;
	bloodPressure?: {
		systolic: number;
		diastolic: number;
	};
	bloodSugar?: number;
	bloodOxygen?: number;
}

export interface HealthProfileDoc extends HealthProfileAttr, mongoose.Document {
	version: number;
}

interface HealthProfileModel extends mongoose.Model<HealthProfileDoc> {
	build(attr: HealthProfileAttr): HealthProfileDoc;
}

const healthProfileSchema = new mongoose.Schema(
	{
		creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
		fullName: { type: String, required: true, lowercase: true, trim: true },
		relative: { type: String, required: true, lowercase: true, trim: true },
		gender: { type: String, required: true, lowercase: true, trim: true },
		DOB: { type: Date, required: true },
		height: { type: Number, required: true },
		weight: { type: Number, required: true },
		bloodGroup: { type: String, required: true, lowercase: true, trim: true },
		profileImage: { type: Object, required: false },
		heartRate: { type: Number, required: false },
		bloodPressure: { type: Object, required: false },
		bloodSugar: { type: Number, required: false },
		bloodOxygen: { type: Number, required: false },
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

healthProfileSchema.index({ creator: 1 });
healthProfileSchema.set("versionKey", "version");

healthProfileSchema.statics.build = (attr: HealthProfileAttr) => {
	return new HealthProfile(attr);
};

export const HealthProfile = mongoose.model<
	HealthProfileDoc,
	HealthProfileModel
>("HealthProfile", healthProfileSchema);
