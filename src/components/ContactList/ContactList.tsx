import { Contacts, Total } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contactsApi';
import { selectFilter } from 'redux/selectors';
import { IContact } from '../../../@types/types';

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
      {visibleContacts.map(({ phone, name, id }: IContact) => (
        <ContactItem key={id} phone={phone} name={name} id={id} />
      ))}
      <Total>Total contacts: {totalContacts}</Total>
    </Contacts>
  );
};
