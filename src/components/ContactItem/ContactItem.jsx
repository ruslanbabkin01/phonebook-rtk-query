import PropTypes from 'prop-types';
import { Contact, Button } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useDeleteMaterialMutation } from '../../redux/contactsSlice';

export const ContactItem = ({ name, phone, id }) => {
  // const dispatch = useDispatch();
  const [deleteContact] = useDeleteMaterialMutation();

  const handleDelete = async id => await deleteContact(id);

  return (
    <Contact>
      {name}: {phone}
      <Button type="button" id={id} onClick={handleDelete}>
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
