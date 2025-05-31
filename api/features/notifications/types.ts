import { z } from 'zod';
import { newsletterSchema, promoSchema } from './schemas';

export type NewsletterType = z.infer<typeof newsletterSchema>;

export type PromoType = z.infer<typeof promoSchema>;
