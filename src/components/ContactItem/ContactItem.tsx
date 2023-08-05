import { Contact, Button } from './ContactItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import { AiTwotoneDelete } from 'react-icons/ai';
import { IContact } from '../../../@types/types';

export const ContactItem = ({ name, phone, id }: IContact) => {
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
        <AiTwotoneDelete size={20} />
      </Button>
    </Contact>
  );
};
