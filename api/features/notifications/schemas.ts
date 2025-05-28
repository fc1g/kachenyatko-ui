import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().nonempty().email(),
});

export const promoSchema = z.object({
  subject: z.string().nonempty(),
  text: z.string().nonempty(),
});
