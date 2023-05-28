import { ContactForm, ContactList, Filter } from './components/index';
import { Box } from './styles/index';

export const App = () => {
  return (
    <Box as="main" mx="auto" width="300px">
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
