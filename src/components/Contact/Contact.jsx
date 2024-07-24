import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <div className={css.nameWrapper}>
          <FaUser /> <p>{contact.name}</p>
        </div>
        <div className={css.phoneWrapper}>
          <FaPhone /> <p>{contact.number}</p>
        </div>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
