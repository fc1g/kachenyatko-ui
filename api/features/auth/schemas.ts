import { passwordValidation } from '@/api/utils/passwordValidation';
import { z } from 'zod';

const defaultSchema = z.object({
  email: z.string().email({ message: 'Please provide a valid email' }),
  password: z.string().regex(passwordValidation, {
    message: 'Please provide a valid passowrd',
  }),
});

export const createUserSchema = defaultSchema
  .extend({
    passwordConfirm: z.string().nonempty(),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });

export const loginUserSchema = defaultSchema;
