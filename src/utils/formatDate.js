import { parseJSON } from 'date-fns';

export const FormatDate = date => {
  return parseJSON(Date.parse(date), 'dd MMMM yyyy, HH:mm');
};
