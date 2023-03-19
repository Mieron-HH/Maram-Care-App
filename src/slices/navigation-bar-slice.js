import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	homeNavbarActive: true,
	scheduleNavbarActive: false,
	deviceNavbarActive: false,
	profileNavbarActive: false,
};

const NavigationBarSlice = createSlice({
	name: "NavigationBar",
	initialState,
	reducers: {
		setHomeNavigationBarActive: (state, action) => {
			state.homeNavbarActive = action.payload;

			state.scheduleNavbarActive = false;
			state.deviceNavbarActive = false;
			state.profileNavbarActive = false;
		},
		setScheduleNavbarActive: (state, action) => {
			state.scheduleNavbarActive = action.payload;

			state.homeNavbarActive = false;
			state.deviceNavbarActive = false;
			state.profileNavbarActive = false;
		},
		setDeviceNavbarActive: (state, action) => {
			state.deviceNavbarActive = action.payload;

			state.homeNavbarActive = false;
			state.scheduleNavbarActive = false;
			state.profileNavbarActive = false;
		},
		setProfileNavbarActive: (state, action) => {
			state.profileNavbarActive = action.payload;

			state.homeNavbarActive = false;
			state.scheduleNavbarActive = false;
			state.deviceNavbarActive = false;
		},
	},
});

export const {
	setHomeNavigationBarActive,
	setScheduleNavbarActive,
	setDeviceNavbarActive,
	setProfileNavbarActive,
} = NavigationBarSlice.actions;

export const selectHomeNavbarActive = (state) =>
	state.NavigationBar.homeNavbarActive;
export const selectScheduleNavbarActive = (state) =>
	state.NavigationBar.scheduleNavbarActive;
export const selectDeviceNavbarActive = (state) =>
	state.NavigationBar.deviceNavbarActive;
export const selectProfileNavbarActive = (state) =>
	state.NavigationBar.profileNavbarActive;

export default NavigationBarSlice.reducer;
