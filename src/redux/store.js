import { configureStore } from "@reduxjs/toolkit";
import { contactReduser } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const store = configureStore({
	reducer: {
		contacts: contactReduser,
		filters: filtersReducer,
	},
});

export default store;
