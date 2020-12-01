import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter a valid email address'),
  password: Yup.string().required('Please enter a password'),
});
