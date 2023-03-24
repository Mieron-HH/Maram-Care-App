import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userDataFetched: false,
	currentUser: null,
	topDoctors: [],
	selectedDoctor: "",
	apptDate: "",
	apptTime: "",
};

const CommonSlice = createSlice({
	name: "Common",
	initialState,
	reducers: {
		setUserDataFetched: (state, action) => {
			state.userDataFetched = action.payload;
		},
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		},
		setTopDoctors: (state, action) => {
			state.topDoctors = action.payload;
		},
		setSelectedDoctor: (state, action) => {
			state.selectedDoctor = action.payload;
		},
		setApptDate: (state, action) => {
			state.apptDate = action.payload;
		},
		setApptTime: (state, action) => {
			state.apptTime = action.payload;
		},
		resetAppointment: (state, action) => {
			state.selectedDoctor = action.payload;
			state.apptDate = action.payload;
			state.apptTime = action.payload;
		},
		resetUserInfo: (state, action) => {
			state.currentUser = null;
			state.userDataFetched = false;
			state.topDoctors = [];

			state.selectedDoctor = action.payload;
			state.apptDate = action.payload;
			state.apptTime = action.apptTime;
		},
	},
});

export const {
	setUserDataFetched,
	setCurrentUser,
	setTopDoctors,
	setSelectedDoctor,
	setApptDate,
	setApptTime,
	resetAppointment,
	resetUserInfo,
} = CommonSlice.actions;

export const selectUserDataFetched = (state) => state.Common.userDataFetched;
export const selectCurrentUser = (state) => state.Common.currentUser;
export const selectTopDoctors = (state) => state.Common.topDoctors;
export const selectSelectedDoctor = (state) => state.Common.selectedDoctor;
export const selectApptDate = (state) => state.Common.apptDate;
export const selectApptTime = (state) => state.Common.apptTime;

export default CommonSlice.reducer;
