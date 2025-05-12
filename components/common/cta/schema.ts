import { z } from 'zod';

export const ctaSchema = z.object({
  email: z.string().nonempty().email(),
});
