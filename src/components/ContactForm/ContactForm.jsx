import { nanoid } from 'nanoid';
import { Label, BtnAdd, ErrorText } from './ContactForm.styled';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/contactsSlice';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { validationSchema } from './validateSchema';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const initialValues = {
    name: '',
    phone: '',
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const name = form.elements.name.value;
  //   const phone = form.elements.phone.value;

  //   const newContact = {
  //     name,
  //     phone,
  //   };

  //   const currentName = name;
  //   const matchName = contacts.some(
  //     contact => contact.name.toLowerCase() === currentName.toLowerCase()
  //   );

  //   matchName
  //     ? Notify.info(`${name} is already in contacts`)
  //     : await addContact({ ...newContact });

  //   form.reset();
  // };

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
      addContact(contact);
      toast.success(`${name} added to phonebook`);
    }
  }

  const handleSubmit = async (values, actions) => {
    const name = values.name;
    const phone = values.phone;

    setContact(name, phone);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Label htmlFor={nameInputId}>
          Name
          <Field
            type="text"
            name="name"
            placeholder="John Jonson"
            id={nameInputId}
          />
          <ErrorMessage component={ErrorText} name="name" />
        </Label>
        <Label htmlFor={numberInputId}>
          Phone
          <Field
            type="tel"
            name="phone"
            placeholder="+380XXXXXXXXX"
            id={numberInputId}
          />
          <ErrorMessage component={ErrorText} name="phone" />
        </Label>
        <BtnAdd type="submit">Add contact</BtnAdd>
      </Form>
    </Formik>
  );
};

export default ContactForm;
