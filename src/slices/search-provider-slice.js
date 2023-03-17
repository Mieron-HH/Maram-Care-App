import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstLoadActive: true,
	secondLoadActive: false,
};

const SearchProviderSlice = createSlice({
	name: "SearchProvider",
	initialState,
	reducers: {
		setFirstLoadActive: (state, action) => {
			state.firstLoadActive = action.payload;
		},
		setSecondLoadActive: (state, action) => {
			state.secondLoadActive = action.payload;
		},
	},
});

export const { setFirstLoadActive, setSecondLoadActive } =
	SearchProviderSlice.actions;

export const selectFirstLoadActive = (state) =>
	state.SearchProvider.firstLoadActive;
export const selectSecondLoadActive = (state) =>
	state.SearchProvider.secondLoadActive;

export default SearchProviderSlice.reducer;
