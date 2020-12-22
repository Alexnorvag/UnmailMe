import * as Yup from 'yup';

export const switchEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter a valid email address'),
});
