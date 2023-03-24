import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	hpFullName: "",
	hpRelative: "",
	hpGender: "Male",
	hpDOB: "",
	hpHeight: "",
	hpWeight: "",
	hpBloodGroup: "",
	hpFullNameErrorMessage: "",
	hpRelativeErrorMessage: "",
	hpGenderErrorMessage: "",
	hpDOBErrorMessage: "",
	hpHeightErrorMessage: "",
	hpWeightErrorMessage: "",
	hpBloodGroupErrorMessage: "",
	hpKeyboardDisplayed: false,
	healthProfileValid: false,
};

const HealthProfileSlice = createSlice({
	name: "HealthProfile",
	initialState,
	reducers: {
		setHPFullName: (state, action) => {
			state.hpFullName = action.payload;
		},
		setHPRelative: (state, action) => {
			state.hpRelative = action.payload;
		},
		setHPGender: (state, action) => {
			state.hpGender = action.payload;
		},
		setHPDOB: (state, action) => {
			state.hpDOB = action.payload;
		},
		setHPHeight: (state, action) => {
			state.hpHeight = action.payload;
		},
		setHPWeight: (state, action) => {
			state.hpWeight = action.payload;
		},
		setHPBloodGroup: (state, action) => {
			state.hpBloodGroup = action.payload;
		},
		setHPFullNameErrorMessage: (state, action) => {
			state.hpFullNameErrorMessage = action.payload;
		},
		setHPRelativeErrorMessage: (state, action) => {
			state.hpRelativeErrorMessage = action.payload;
		},
		setHPGenderErrorMessage: (state, action) => {
			state.hpGenderErrorMessage = action.payload;
		},
		setHPDOBErrorMessage: (state, action) => {
			state.hpDOBErrorMessage = action.payload;
		},
		setHPHeightErrorMessage: (state, action) => {
			state.hpHeightErrorMessage = action.payload;
		},
		setHPWeightErrorMessage: (state, action) => {
			state.hpWeightErrorMessage = action.payload;
		},
		setHPBloodGroupErrorMessage: (state, action) => {
			state.hpBloodGroupErrorMessage = action.payload;
		},
		setHPKeyboardDisplayed: (state, action) => {
			state.hpKeyboardDisplayed = action.payload;
		},
		setHealthProfileValid: (state, action) => {
			state.healthProfileValid = action.payload;
		},
		resetHealthProfile: (state, action) => {
			state.hpFullName = action.payload;
			state.hpRelative = action.payload;
			state.hpGender = action.payload;
			state.hpDOB = action.payload;
			state.hpHeight = action.payload;
			state.hpWeight = action.payload;
			state.hpBloodGroup = action.payload;

			state.hpFullNameErrorMessage = action.payload;
			state.hpRelativeErrorMessage = action.payload;
			state.hpGenderErrorMessage = action.payload;
			state.hpDOBErrorMessage = action.payload;
			state.hpHeightErrorMessage = action.payload;
			state.hpWeightErrorMessage = action.payload;
			state.hpBloodGroupErrorMessage = action.payload;

			state.hpKeyboardDisplayed = false;
			state.healthProfileValid = false;
		},
	},
});

export const {
	setHPFullName,
	setHPRelative,
	setHPGender,
	setHPDOB,
	setHPHeight,
	setHPWeight,
	setHPBloodGroup,
	setHPFullNameErrorMessage,
	setHPRelativeErrorMessage,
	setHPGenderErrorMessage,
	setHPDOBErrorMessage,
	setHPHeightErrorMessage,
	setHPWeightErrorMessage,
	setHPBloodGroupErrorMessage,
	setHPKeyboardDisplayed,
	setHealthProfileValid,
	resetHealthProfile,
} = HealthProfileSlice.actions;

export const selectHPFullName = (state) => state.HealthProfile.hpFullName;
export const selectHPRelative = (state) => state.HealthProfile.hpRelative;
export const selectHPGender = (state) => state.HealthProfile.hpGender;
export const selectHPDOB = (state) => state.HealthProfile.hpDOB;
export const selectHPHeight = (state) => state.HealthProfile.hpHeight;
export const selectHPWeight = (state) => state.HealthProfile.hpWeight;
export const selectHPBloodGroup = (state) => state.HealthProfile.hpBloodGroup;
export const selectHPFullNameErrorMessage = (state) =>
	state.HealthProfile.hpFullNameErrorMessage;
export const selectHPRelativeErrorMessage = (state) =>
	state.HealthProfile.hpRelativeErrorMessage;
export const selectHPGenderErrorMessage = (state) =>
	state.HealthProfile.hpGenderErrorMessage;
export const selectHPDOBErrorMessage = (state) =>
	state.HealthProfile.hpDOBErrorMessage;
export const selectHPHeightErrorMessage = (state) =>
	state.HealthProfile.hpHeightErrorMessage;
export const selectHPWeightErrorMessage = (state) =>
	state.HealthProfile.hpWeightErrorMessage;
export const selectHPBloodGroupErrorMessage = (state) =>
	state.HealthProfile.hpBloodGroupErrorMessage;
export const selectHealthProfileValid = (state) =>
	state.HealthProfile.healthProfileValid;
export const selectHPKeyboardDisplayed = (state) =>
	state.HealthProfile.hpKeyboardDisplayed;

export default HealthProfileSlice.reducer;
