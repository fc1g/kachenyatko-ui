import { z } from 'zod';
import { createUserSchema, loginUserSchema } from './schemas';

export type LoginUserType = z.infer<typeof loginUserSchema>;
export type CreateUserType = z.infer<typeof createUserSchema>;

export type AuthResponseType = {
  accessToken: string;
};

export type AuthFormField = {
  name: keyof LoginUserType | keyof CreateUserType;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
};
