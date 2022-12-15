import { parseJSON } from 'date-fns';
const date = '2022-12-14T17:36:34.367Z';

export const FormatDate = date => {
  return parseJSON(Date.parse(date), 'dd MMMM yyyy, HH:mm');
};

console.log(date);
