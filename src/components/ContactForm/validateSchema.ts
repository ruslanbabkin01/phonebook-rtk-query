import { object, string } from 'yup';

export const validationSchema = object({
  name: string()
    .min(3, 'Name should have at least 3 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'Only letters can be accepted'
    )
    .max(32, 'Name should be up to 32 characters long')
    .required('Name is required'),
  phone: string()
    .matches(/^\+380\d{9}$/, 'Example: "+380xxxxxxxxx"')
    .min(13, 'Phone number should be 13 digits')
    .max(13, 'Phone number should be 13 digits')
    .required('Phone is required'),
});
