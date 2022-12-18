import PropTypes from 'prop-types';
import { Contact, Button } from './ContactItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsSlice';

export const ContactItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Contact>
      {name}: {phone}
      <Button
        type="button"
        id={id}
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
