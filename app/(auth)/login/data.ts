import { AuthFormField } from '@/api/features';

export const loginFormFields: AuthFormField[] = [
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
];
