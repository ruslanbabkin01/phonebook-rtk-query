import ContactForm from 'components/ContactForm/ContactForm';
import { Box, ContactList, Container, Filter } from './components/index';
import { Heading } from 'theme-ui';

export const App = () => {
  return (
    <Container>
      <Box as="main">
        {/* <Box as="h1" fontSize={30}>
          Phonebook
        </Box> */}
        <Heading>Phonebook </Heading>

        <ContactForm />

        <Box as="h2" fontSize={24}>
          Contacts
        </Box>

        <Filter />

        <ContactList />
      </Box>
    </Container>
  );
};
