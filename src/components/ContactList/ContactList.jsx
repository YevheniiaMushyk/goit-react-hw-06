import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
	const selectContacts = useSelector((state) => state.contacts);

	return (
		<ul className={css.list}>
			{Array.isArray(selectContacts) &&
				selectContacts.map((contact) => {
					return (
						<li className={css.item} key={contact.id}>
							<Contact name={contact.name} number={contact.number} id={contact.id} />
						</li>
					);
				})}
		</ul>
	);
};

export default ContactList;
