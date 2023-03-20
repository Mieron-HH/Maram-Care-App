import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	paymentPlan: "",
};

const PaymentSlice = createSlice({
	name: "PaymentSlice",
	initialState,
	reducers: {
		setPaymentPlan: (state, action) => {
			state.paymentPlan = action.payload;
		},
	},
});

export const { setPaymentPlan } = PaymentSlice.actions;

export const selectPaymentPlan = (state) => state.Payment.paymentPlan;

export default PaymentSlice.reducer;
