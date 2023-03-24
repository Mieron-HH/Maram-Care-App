import mongoose from "mongoose";

// importing services
import { Password } from "../services/password";

export interface UserAttr {
	phoneNumber: string;
	email: string;
	password: string;
	fullName: string;
	DOB: Date;
	gender: string;
	city: string;
	address: string;
	paymentPlan?: string;
	userImage?: {
		data: Buffer;
		contentType: string;
	};
	userImageNoBG?: {
		data: Buffer;
		contentType: string;
	};
}

export interface UserDoc extends UserAttr, mongoose.Document {
	passwordLastUpdatedAt: Date;
	version: number;
}

interface UserModel extends mongoose.Model<UserDoc> {
	build(attr: UserAttr): UserDoc;
}

const userSchema = new mongoose.Schema(
	{
		phoneNumber: {
			type: String,
			required: true,
			lowercase: true,
			trim: true,
		},
		email: { type: String, required: true, lowercase: true, trim: true },
		password: { type: String, required: true },
		fullName: { type: String, required: true, lowercase: true, trim: true },
		DOB: { type: Date, required: true, lowercase: true, trim: true },
		gender: { type: String, required: true, lowercase: true, trim: true },
		city: { type: String, required: true, lowercase: true, trim: true },
		address: { type: String, required: true, lowercase: true, trim: true },
		paymentPlan: {
			type: String,
			required: false,
			lwercase: true,
			trim: true,
		},
		userImage: { type: Object, required: false },
		userImageNoBG: { type: Object, required: false },
		passwordLastCreatedAt: {
			type: Date,
			required: false,
			lowercase: true,
			trim: true,
		},
	},
	{
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
				delete ret.__v;
			},
		},
	}
);

userSchema.index({ email: 1 });
userSchema.set("versionKey", "version");

userSchema.statics.build = (attr: UserAttr) => {
	return new User(attr);
};

userSchema.pre("save", async function (this: UserDoc, done) {
	if (this.isModified("password")) {
		const hashed = await Password.toHash(this.get("password"));
		this.set("password", hashed);
	}
	done();
});

export const User = mongoose.model<UserDoc, UserModel>("User", userSchema);
