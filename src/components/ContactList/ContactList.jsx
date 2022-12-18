import { Contacts, TotalContacts } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const { data: contacts = [], error, isLoading } = useFetchContactsQuery();
  const filter = useSelector(selectFilter);
  const totalContacts = contacts.length;

  const normalizedFilter = filter.toLowerCase().trim();

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Contacts>
      {isLoading && !error && <b>Request in progress...</b>}
      {visibleContacts.map(({ phone, name, id }) => (
        <ContactItem key={id} phone={phone} name={name} id={id} />
      ))}
      <TotalContacts>Total contacts: {totalContacts}</TotalContacts>
    </Contacts>
  );
};
