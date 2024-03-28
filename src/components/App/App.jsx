import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
// import contacts from "../ContactList/contacs.json";

function App() {
	// Аналіз вмісту та оновлення localStorage
	// const [contactsList, setcontactsList] = useState(() => {
	// 	const savedContacts = localStorage.getItem("saved-contacts");
	// 	return savedContacts ? JSON.parse(savedContacts) : contacts;
	// });

	// useEffect(() => {
	// 	localStorage.setItem("saved-contacts", JSON.stringify(contactsList));
	// }, [contactsList]);

	// Фільтрація контактів при зміні searchValue
	// const [searchValue, setSearchValue] = useState("");
	// const filteredContactsList = contactsList.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase()));

	return (
		<div>
			<h1 className={css.title}>Phonebook</h1>
			{/* <ContactForm addNewContact={addNewContact} />
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			<ContactList contacts={filteredContactsList} deleteContact={deleteContact} /> */}
			<ContactForm />
			<SearchBox />
			<ContactList />
		</div>
	);
}

export default App;
