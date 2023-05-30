import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/contactsSlice';
import { Formik, ErrorMessage } from 'formik';
import { validationSchema } from './validateSchema';
import {
  Label,
  BtnAdd,
  ErrorText,
  FieldInput,
  FormStyle,
} from './ContactForm.styled';
import { toast } from 'react-toastify';
import { Box } from 'components/Box';

const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const initialValues = {
    name: '',
    phone: '',
  };

  function setContact(name, phone) {
    const contact = {
      name,
      phone,
    };

    const currentName = name.toLowerCase();
    const matchName = contacts.some(
      ({ name }) => name.toLowerCase() === currentName.toLowerCase()
    );

    if (matchName) {
      toast.warn(`${name} is already in contacts`, {
        position: 'top-center',
        autoClose: 3000,
      });
    } else {
      toast.success(`${name} added to phonebook`);
      addContact(contact);
    }
  }

  const handleSubmit = async ({ values }, actions) => {
    const name = values.name;
    const phone = values.phone;

    setContact(name, phone);

    actions.resetForm();
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormStyle>
        <Label htmlFor="name">Name</Label>
        <Box mb={4} position="relative">
          <FieldInput type="text" name="name" placeholder="John Jonson" />
          <FormError name="name" />
        </Box>

        <Label htmlFor="phone">Phone</Label>
        <Box mb={4} position="relative">
          <FieldInput type="tel" name="phone" placeholder="+380XXXXXXXXX" />
          <FormError name="phone" />
        </Box>

        <BtnAdd type="submit">Add contact</BtnAdd>
      </FormStyle>
    </Formik>
  );
};

export default ContactForm;
