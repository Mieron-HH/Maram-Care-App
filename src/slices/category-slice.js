import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dentistCategoryActive: true,
	physicalCategoryActive: false,
	stomachCategoryActive: false,
	mindCategoryActive: false,
};

const CategorySlice = createSlice({
	name: "Category",
	initialState,
	reducers: {
		setDentistCategoryActive: (state, action) => {
			state.dentistCategoryActive = action.payload;

			state.physicalCategoryActive = false;
			state.stomachCategoryActive = false;
			state.mindCategoryActive = false;
		},
		setPhysicalCategoryActive: (state, action) => {
			state.physicalCategoryActive = action.payload;

			state.dentistCategoryActive = false;
			state.stomachCategoryActive = false;
			state.mindCategoryActive = false;
		},
		setStomachCategoryActive: (state, action) => {
			state.stomachCategoryActive = action.payload;

			state.dentistCategoryActive = false;
			state.physicalCategoryActive = false;
			state.mindCategoryActive = false;
		},
		setMindCategoryActive: (state, action) => {
			state.mindCategoryActive = action.payload;

			state.dentistCategoryActive = false;
			state.physicalCategoryActive = false;
			state.stomachCategoryActive = false;
		},
	},
});

export const {
	setDentistCategoryActive,
	setPhysicalCategoryActive,
	setStomachCategoryActive,
	setMindCategoryActive,
} = CategorySlice.actions;

export const selectDentistCategoryActive = (state) =>
	state.Category.dentistCategoryActive;
export const selectPhysicalCategoryActive = (state) =>
	state.Category.physicalCategoryActive;
export const selectStomachCategoryActive = (state) =>
	state.Category.stomachCategoryActive;
export const selectMindCategoryActive = (state) =>
	state.Category.mindCategoryActive;

export default CategorySlice.reducer;
