import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	phoneNumberFormActive: true,
	verifyPhoneNumberFormActive: false,
	scanDeviceFormActive: false,
	registrationCodeFormActive: false,
	countryFormActive: false,
	stateFormActive: false,
	insuranceProvderFormActive: false,
	userRegistrationFormActive: false,
	phoneNumberValid: false,
	phoneNumberVerified: false,
	otp1: "",
	otp2: "",
	otp3: "",
	otp4: "",
	registrationCode: "",
	registrationCodeErrorMessage: "",
	registrationCodeVerified: false,
	countrySelected: "",
	stateSelected: "",
	insuranceProviderSelected: "",
	signupErrorMessage: "",
};

const SignupSlice = createSlice({
	name: "Signup",
	initialState,
	reducers: {
		setPhoneNumberFormActive: (state, action) => {
			state.phoneNumberFormActive = action.payload;
		},
		setVerifyPhoneNumberFormActive: (state, action) => {
			state.verifyPhoneNumberFormActive = action.payload;
		},
		setScanDeviceFormActive: (state, action) => {
			state.scanDeviceFormActive = action.payload;
		},
		setRegistrationCodeFormActive: (state, action) => {
			state.registrationCodeFormActive = action.payload;
		},
		setCountryFormActive: (state, action) => {
			state.countryFormActive = action.payload;
		},
		setStateFormActive: (state, action) => {
			state.stateFormActive = action.payload;
		},
		setInsuranceProviderForm: (state, action) => {
			state.insuranceProvderFormActive = action.payload;
		},
		setUserRegistrationFormActive: (state, action) => {
			state.userRegistrationFormActive = action.payload;
		},
		setPhoneNumberValid: (state, action) => {
			state.phoneNumberValid = action.payload;
		},
		setPhoneNumberVerified: (state, action) => {
			state.phoneNumberVerified = action.payload;
		},
		setOtp1: (state, action) => {
			state.otp1 = action.payload;
		},
		setOtp2: (state, action) => {
			state.otp2 = action.payload;
		},
		setOtp3: (state, action) => {
			state.otp3 = action.payload;
		},
		setOtp4: (state, action) => {
			state.otp4 = action.payload;
		},
		setRegistrationCode: (state, action) => {
			state.registrationCode = action.payload;
		},
		setRegistrationCodeErrorMessage: (state, action) => {
			state.registrationCodeErrorMessage = action.payload;
		},
		setRegistrationCodeVerified: (state, action) => {
			state.registrationCodeVerified = action.payload;
		},
		setCountrySelected: (state, action) => {
			state.countrySelected = action.payload;
		},
		setStateSelected: (state, action) => {
			state.stateSelected = action.payload;
		},
		setInsuranceProviderSelected: (state, action) => {
			state.insuranceProviderSelected = action.payload;
		},
		setSignupErrorMessage: (state, action) => {
			state.signupErrorMessage = action.payload;
		},
	},
});

export const {
	setPhoneNumber,
	setPhoneNumberFormActive,
	setVerifyPhoneNumberFormActive,
	setScanDeviceFormActive,
	setRegistrationCodeFormActive,
	setInsuranceProviderForm,
	setCountryFormActive,
	setStateFormActive,
	setUserRegistrationFormActive,
	setPhoneNumberValid,
	setPhoneNumberVerified,
	setOtp1,
	setOtp2,
	setOtp3,
	setOtp4,
	setRegistrationCode,
	setRegistrationCodeErrorMessage,
	setRegistrationCodeVerified,
	setCountrySelected,
	setStateSelected,
	setInsuranceProviderSelected,
	setSignupErrorMessage,
} = SignupSlice.actions;

export const selectPhoneNumberFormActive = (state) =>
	state.Signup.phoneNumberFormActive;
export const selectVerifyPhoneNumberFormActive = (state) =>
	state.Signup.verifyPhoneNumberFormActive;
export const selectScanDeviceFormActive = (state) =>
	state.Signup.scanDeviceFormActive;
export const selectRegistrationCodeFormActive = (state) =>
	state.Signup.registrationCodeFormActive;
export const selectCountryFormActive = (state) =>
	state.Signup.countryFormActive;
export const selectStateFormActive = (state) => state.Signup.stateFormActive;
export const selectInsuranceProviderForm = (state) =>
	state.Signup.insuranceProvderFormActive;
export const selectUserRegistrationFormActive = (state) =>
	state.Signup.userRegistrationFormActive;
export const selectPhoneNumberValid = (state) => state.Signup.phoneNumberValid;
export const selectPhoneNumberVerified = (state) =>
	state.Signup.phoneNumberVerified;
export const selectOtp1 = (state) => state.Signup.otp1;
export const selectOtp2 = (state) => state.Signup.otp2;
export const selectOtp3 = (state) => state.Signup.otp3;
export const selectOtp4 = (state) => state.Signup.otp4;
export const selectRegistrationCode = (state) => state.Signup.registrationCode;
export const selectRegistrationCodeErrorMessage = (state) =>
	state.Signup.registrationCodeErrorMessage;
export const selectRegistrationCodeVerified = (state) =>
	state.Signup.registrationCodeVerified;
export const selectCountrySelected = (state) => state.Signup.countrySelected;
export const selectStateSelected = (state) => state.Signup.stateSelected;
export const selectInsuranceProviderSelected = (state) =>
	state.Signup.insuranceProviderSelected;
export const selectSignupErrorMessage = (state) =>
	state.Signup.signupErrorMessage;

export default SignupSlice.reducer;
