import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import contactsInitialState from "../components/ContactList/contacs.json";

contactsInitialState;

const contactsSlice = createSlice({
	name: "items",
	initialState: contactsInitialState,
	reducers: {
		addContact: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(contact) {
				return {
					payload: {
						id: nanoid(),
						name: contact.name,
						number: contact.number,
					},
				};
			},
		},
		deleteContact(state, action) {
			const index = state.findIndex((contact) => contact.id === action.payload);
			state.splice(index, 1);
		},
		selectContacts(state, action) {
			// for (const task of state) {
			// 	if (task.id === action.payload) {
			// 		task.completed = !task.completed;
			// 		break;
			// 	}
			// }
		},
	},
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact, selectContacts } = contactsSlice.actions;
export const contactReduser = contactsSlice.reducer;
