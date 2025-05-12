import { z } from 'zod';
import { ctaSchema } from './schema';

export type CtaFormData = z.infer<typeof ctaSchema>;
