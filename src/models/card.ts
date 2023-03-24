import mongoose from "mongoose";

export interface CardAttr {
	user: string;
	cardHolderName: string;
	cardNumber: string;
	expiryDate: string;
	CVC: string;
}

export interface CardDoc extends CardAttr, mongoose.Document {
	version: number;
}

interface CardModel extends mongoose.Model<CardDoc> {
	build(attr: CardAttr): CardDoc;
}

const cardSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
		cardHolderName: {
			type: String,
			required: true,
			lowercase: true,
			trim: true,
		},
		cardNumber: { type: String, required: true, trim: true },
		expiryDate: { type: String, required: true },
		CVC: { type: String, required: true, lowercaswe: true, trim: true },
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

cardSchema.index({ user: 1, cardNumber: 1 });
cardSchema.set("versionKey", "version");

cardSchema.statics.build = (attr: CardAttr) => {
	return new Card(attr);
};

export const Card = mongoose.model<CardDoc, CardModel>("Card", cardSchema);
