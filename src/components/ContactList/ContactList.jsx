import { Contacts, TotalContacts } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const { filter } = useSelector(selectFilter);
  const { data: contacts } = useFetchContactsQuery();
  console.log(filter);

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  const totalContacts = visibleContacts.length;
  return (
    <Contacts>
      {visibleContacts.map(({ phone, name, id }) => (
        <ContactItem key={id} phone={phone} name={name} id={id} />
      ))}
      <TotalContacts>Total contacts: {totalContacts}</TotalContacts>
    </Contacts>
  );
};
