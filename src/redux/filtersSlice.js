import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
	name: "filters",
	initialState: {
		name: "",
	},
	reducers: {
		changeFilter(state, action) {
			// state.status = action.payload;
		},
		selectNameFilter(state, action) {
			// state.status = action.payload;
		},
	},
});

// Експортуємо генератори екшенів та редюсер
export const { changeFilter, selectNameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
