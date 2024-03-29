import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
	// Аналіз вмісту та оновлення localStorage
	// const [contactsList, setcontactsList] = useState(() => {
	// 	const savedContacts = localStorage.getItem("saved-contacts");
	// 	return savedContacts ? JSON.parse(savedContacts) : contacts;
	// });

	// useEffect(() => {
	// 	localStorage.setItem("saved-contacts", JSON.stringify(contactsList));
	// }, [contactsList]);

	return (
		<div>
			<h1 className={css.title}>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</div>
	);
}

export default App;
