import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstRouteActive: true,
	secondRouteActive: false,
	thirdRouteActive: false,
	displayButton: false,
};

export const OnboardingSlice = createSlice({
	name: "Onboarding",
	initialState,
	reducers: {
		setFirstRouteActive: (state, action) => {
			state.firstRouteActive = action.payload;
		},
		setSecondRouteActive: (state, action) => {
			state.secondRouteActive = action.payload;
		},
		setThirdRouteActive: (state, action) => {
			state.thirdRouteActive = action.payload;
		},
		setDisplayButton: (state, action) => {
			state.displayButton = action.payload;
		},
	},
});

export const {
	setFirstRouteActive,
	setSecondRouteActive,
	setThirdRouteActive,
	setDisplayButton,
} = OnboardingSlice.actions;

export const selectFirstRouteActive = (state) =>
	state.Onboarding.firstRouteActive;
export const selectSecondRouteActive = (state) =>
	state.Onboarding.secondRouteActive;
export const selectThirdRouteActive = (state) =>
	state.Onboarding.thirdRouteActive;
export const selectDisplayButton = (state) => state.Onboarding.displayButton;

export default OnboardingSlice.reducer;
