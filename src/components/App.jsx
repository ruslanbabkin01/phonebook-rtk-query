import { ContactForm, ContactList, Filter } from './index';
import { Box } from '../styles/index';
import { useFetchContactsQuery } from '../redux/contactsSlice';

export const App = () => {
  const { error, isLoading } = useFetchContactsQuery();

  return (
    <Box mx="auto" width="300px">
      <Box as="h1" fontSize={30}>
        Phonebook
      </Box>
      <ContactForm />
      <Box as="h2" fontSize={24}>
        Contacts
      </Box>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Box>
  );
};
