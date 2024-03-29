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

const App: React.FC = () => {
  return (
    <Box as="main">
      <Header />
      <Box as="section" py={4}>
        <Container>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginBottom="12px"
          >
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
          <ContactForm />
        </Container>
      </Box>
      <Box as="section" py={4}>
        <Container>
          <Box as="h2" fontSize={24} textAlign="center" mb="12px">
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

export default App;
