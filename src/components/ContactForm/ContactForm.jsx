import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { Form, Label, BtnAdd } from './ContactForm.styled';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/contactsSlice';

const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const newContact = {
      name,
      phone,
    };

    const currentName = name;
    const matchName = contacts.some(
      contact => contact.name.toLowerCase() === currentName.toLowerCase()
    );

    matchName
      ? Notify.info(`${name} is already in contacts`)
      : await addContact({ ...newContact });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
      </Label>
      <BtnAdd type="submit">Add contact</BtnAdd>
    </Form>
  );
};

export default ContactForm;
