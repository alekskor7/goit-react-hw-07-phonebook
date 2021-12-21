import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={s.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.contact}>
      <p className={s.name}>{`${contact.name}`}</p>
      <p className={s.number}>{`${contact.number}`}</p>
      <button
        className={s.button}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
      ))}
    </ul>
    
  );
}