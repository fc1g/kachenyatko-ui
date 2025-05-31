import { AuthFormField } from '@/api/features';

export const signupFormFields: AuthFormField[] = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'example@gmail.com',
    type: 'email',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: '********',
    type: 'password',
    required: true,
  },
  {
    name: 'passwordConfirm',
    label: 'Confirm password',
    placeholder: '********',
    type: 'password',
    required: true,
  },
];
