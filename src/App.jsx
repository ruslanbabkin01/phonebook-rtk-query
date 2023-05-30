import ContactForm from 'components/ContactForm/ContactForm';
import {
  Box,
  ContactList,
  Container,
  Filter,
  Footer,
  Header,
} from './components/index';
import { Heading } from 'theme-ui';
import { FcContacts } from 'react-icons/fc';

export const App = () => {
  return (
    <Box as="main">
      <Header />

      <Box as="section" py={4} px={3}>
        <Container>
          <Box display="flex" alignItems="center" justifyContent="center">
            <FcContacts size={30} />
            <Heading
              as="h1"
              sx={{
                fontSize: '30px',
                marginLeft: '5px',
              }}
            >
              Phonebook
            </Heading>
          </Box>
        </Container>

        <ContactForm />
      </Box>

      <Box as="section" py={4} px={3}>
        <Container>
          <Box as="h2" fontSize={24} textAlign="center">
            Contacts
          </Box>

          <Filter />

          <ContactList />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};
