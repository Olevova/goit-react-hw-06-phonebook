import { ContactElem } from '../ContactElem/ContactElem';
import { getContacts, getFilter } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { delcontact } from '../../redux/contactSlice';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(delcontact(id));
  };

  const filterContacts = contacts.filter(cont => {
    return cont.name.toLowerCase().includes(filter.toLowerCase());
  });

  return filterContacts.map(({ id, name, number }) => (
    <ContactElem
      key={id}
      id={id}
      name={name}
      number={number}
      delCont={deleteContact}
    />
  ));
};
