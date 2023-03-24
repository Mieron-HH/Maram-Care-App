import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	fullName: "",
	DOB: "",
	phoneNumber: "",
	email: "",
	password: "",
	gender: "",
	city: "",
	address: "",
	fullNameErrorMessage: "",
	DOBErrorMessage: "",
	phoneNumberErrorMessage: "",
	emailErrorMessage: "",
	passwordErrorMessage: "",
	genderErrorMessage: "",
	cityErrorMessage: "",
	addressErrorMessage: "",
	userInfoValid: false,
	keyboardDisplayed: false,
};

const UserRegistrationSlice = createSlice({
	name: "UserRegistration",
	initialState,
	reducers: {
		setFullName: (state, action) => {
			state.fullName = action.payload;
		},
		setDOB: (state, action) => {
			state.DOB = action.payload;
		},
		setPhoneNumber: (state, action) => {
			state.phoneNumber = action.payload;
		},
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		setGender: (state, action) => {
			state.gender = action.payload;
		},
		setCity: (state, action) => {
			state.city = action.payload;
		},
		setAddress: (state, action) => {
			state.address = action.payload;
		},
		setFullNameErrorMessage: (state, action) => {
			state.fullNameErrorMessage = action.payload;
		},
		setDOBErrorMessage: (state, action) => {
			state.DOBErrorMessage = action.payload;
		},
		setPhoneNumberErrorMessage: (state, action) => {
			state.phoneNumberErrorMessage = action.payload;
		},
		setEmailErrorMessage: (state, action) => {
			state.emailErrorMessage = action.payload;
		},
		setPasswordErrorMessage: (state, action) => {
			state.passwordErrorMessage = action.payload;
		},
		setGenderErrorMessage: (state, action) => {
			state.genderErrorMessage = action.payload;
		},
		setCityErrorMessage: (state, action) => {
			state.cityErrorMessage = action.payload;
		},
		setAddressErrorMessage: (state, action) => {
			state.addressErrorMessage = action.payload;
		},
		setUserInfoValid: (state, action) => {
			state.userInfoValid = action.payload;
		},
		setKeyboardDisplayed: (state, action) => {
			state.keyboardDisplayed = action.payload;
		},
		resetRegistrationForm: (state, action) => {
			state.fullName = action.payload;
			state.DOB = action.payload;
			state.phoneNumber = action.payload;
			state.email = action.payload;
			state.password = action.payload;
			state.gender = action.payload;
			state.city = action.payload;
			state.address = action.payload;

			state.fullNameErrorMessage = action.payload;
			state.DOBErrorMessage = action.payload;
			state.phoneNumberErrorMessage = action.payload;
			state.emailErrorMessage = action.payload;
			state.passwordErrorMessage = action.payload;
			state.genderErrorMessage = action.payload;
			state.cityErrorMessage = action.payload;
			state.addressErrorMessage = action.payload;

			state.userInfoValid = false;
			state.keyboardDisplayed = false;
		},
	},
});

export const {
	setFullName,
	setDOB,
	setPhoneNumber,
	setEmail,
	setPassword,
	setGender,
	setCity,
	setAddress,
	setFullNameErrorMessage,
	setDOBErrorMessage,
	setPhoneNumberErrorMessage,
	setEmailErrorMessage,
	setPasswordErrorMessage,
	setGenderErrorMessage,
	setCityErrorMessage,
	setAddressErrorMessage,
	setUserInfoValid,
	setKeyboardDisplayed,
	resetRegistrationForm,
} = UserRegistrationSlice.actions;

export const selectFullName = (state) => state.UserRegistration.fullName;
export const selectDOB = (state) => state.UserRegistration.DOB;
export const selectPhoneNumber = (state) => state.UserRegistration.phoneNumber;
export const selectEmail = (state) => state.UserRegistration.email;
export const selectPassword = (state) => state.UserRegistration.password;
export const selectGender = (state) => state.UserRegistration.gender;
export const selectCity = (state) => state.UserRegistration.city;
export const selectAddress = (state) => state.UserRegistration.address;
export const selectFullNameErrorMessage = (state) =>
	state.UserRegistration.fullNameErrorMessage;
export const selectDOBErrorMessage = (state) =>
	state.UserRegistration.DOBErrorMessage;
export const selectPhoneNumberErrorMessage = (state) =>
	state.UserRegistration.phoneNumberErrorMessage;
export const selectEmailErrorMessage = (state) =>
	state.UserRegistration.emailErrorMessage;
export const selectPasswordErrorMessage = (state) =>
	state.UserRegistration.passwordErrorMessage;
export const selectGenderErrorMessage = (state) =>
	state.UserRegistration.genderErrorMessage;
export const selectCityErrorMessage = (state) =>
	state.UserRegistration.cityErrorMessage;
export const selectAddressErrorMessage = (state) =>
	state.UserRegistration.addressErrorMessage;
export const selectUserInfoValid = (state) =>
	state.UserRegistration.userInfoValid;
export const selectKeyboardDisplayed = (state) =>
	state.UserRegistration.keyboardDisplayed;

export default UserRegistrationSlice.reducer;
