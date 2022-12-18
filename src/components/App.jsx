import { ContactForm, ContactList, Filter } from './index';
import { Box } from '../styles/index';

export const App = () => {
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
      <ContactList />
    </Box>
  );
};
