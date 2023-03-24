import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cardHolderName: "",
	cardNumber: "",
	expiryDate: "",
	CVC: "",
	cardHolderNameErrorMessage: "",
	cardNumberErrorMessage: "",
	expiryDateErrorMessage: "",
	CVCErrorMessage: "",
	cardFormActive: false,
	cdKeyboadDisplayed: false,
	creditCardValid: false,
};

const CreditCardSlice = createSlice({
	name: "CreditCard",
	initialState,
	reducers: {
		setCardHolderName: (state, action) => {
			state.cardHolderName = action.payload;
		},
		setCardNumer: (state, action) => {
			state.cardNumber = action.payload;
		},
		setExpiryDate: (state, action) => {
			state.expiryDate = action.payload;
		},
		setCVC: (state, action) => {
			state.CVC = action.payload;
		},
		setCardHolderNameErrorMessage: (state, action) => {
			state.cardHolderNameErrorMessage = action.payload;
		},
		setCardNumerErrorMessage: (state, action) => {
			state.cardNumberErrorMessage = action.payload;
		},
		setExpiryDateErrorMessage: (state, action) => {
			state.expiryDateErrorMessage = action.payload;
		},
		setCVCErrorMessage: (state, action) => {
			state.CVCErrorMessage = action.payload;
		},
		setCardFormActive: (state, action) => {
			state.cardFormActive = action.payload;
		},
		setCDKeyboardDisplayed: (state, action) => {
			state.cdKeyboadDisplayed = action.payload;
		},
		setCreditCardValid: (state, action) => {
			state.creditCardValid = action.payload;
		},
		resetCardForm: (state, action) => {
			state.cardHolderName = action.payload;
			state.cardNumber = action.payload;
			state.expiryDate = action.payload;
			state.CVC = action.payload;

			state.cardHolderNameErrorMessage = action.payload;
			state.cardNumberErrorMessage = action.payload;
			state.expiryDateErrorMessage = action.payload;
			state.CVCErrorMessage = action.payload;

			state.creditCardValid = false;
			state.cdKeyboadDisplayed = false;
		},
	},
});

export const {
	setCardHolderName,
	setCardNumer,
	setExpiryDate,
	setCVC,
	setCardHolderNameErrorMessage,
	setCardNumerErrorMessage,
	setExpiryDateErrorMessage,
	setCVCErrorMessage,
	setCardFormActive,
	setCDKeyboardDisplayed,
	setCreditCardValid,
	resetCardForm,
} = CreditCardSlice.actions;

export const selectCardHolderName = (state) => state.CreditCard.cardHolderName;
export const selectCardNumber = (state) => state.CreditCard.cardNumber;
export const selectExpiryDate = (state) => state.CreditCard.expiryDate;
export const selectCVC = (state) => state.CreditCard.CVC;

export const selectCardHolderNameErrorMessage = (state) =>
	state.CreditCard.cardHolderNameErrorMessage;
export const selectCardNumberErrorMessage = (state) =>
	state.CreditCard.cardNumberErrorMessage;
export const selectExpiryDateErrorMessage = (state) =>
	state.CreditCard.expiryDateErrorMessage;
export const selectCVCErrorMessage = (state) =>
	state.CreditCard.CVCErrorMessage;
export const selectCardFormActive = (state) => state.CreditCard.cardFormActive;
export const selectCDKeyboardDisplayed = (state) =>
	state.CreditCard.cdKeyboadDisplayed;
export const selectCreditCardValid = (state) =>
	state.CreditCard.creditCardValid;

export default CreditCardSlice.reducer;
