import { ContactElem } from '../ContactElem/ContactElem';
import { getContacts, getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filterWord = useSelector(getFilter);
  console.log(contacts, 1);

  const filterContacts = contacts.filter(cont => {
    return cont.name.toLowerCase().includes(filterWord.toLowerCase());
  });
  console.log(filterContacts, 2);

  return filterContacts.map(({ id, name, number }) => (
    <ContactElem key={id} id={id} name={name} number={number} />
  ));
};
