import { ContactForm, ContactList, Filter } from './index';
import { Box } from '../styles/index';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
// import { parseJSON } from 'date-fns';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // const date = '2022-12-14T17:36:34.367Z';

  // const FormatDate = date => {
  //   return parseJSON(Date.parse(date), 'dd MMMM yyyy, HH:mm');
  // };
  // console.log(FormatDate(date));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box mx="auto" width="300px">
      <Box as="h1" fontSize={30}>
        Phonebook
      </Box>
      <ContactForm />
      <Box as="h2" fontSize={24}>
        Contacts
      </Box>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Box>
  );
};
