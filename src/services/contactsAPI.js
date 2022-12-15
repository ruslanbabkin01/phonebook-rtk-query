import axios from 'axios';

axios.defaults.baseURL =
  'https://63972e3786d04c76338d8491.mockapi.io/api/v1/contacts';

export async function fetchContactsAPI() {
  const response = await axios.get();
  return response.data;
}

export async function addContactAPI(contact) {
  const response = await axios.post('', contact);
  return response.data;
}

export async function deleteContactAPI(contactId) {
  const response = await axios.delete(contactId);
  return response.data;
}
