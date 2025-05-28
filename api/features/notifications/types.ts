import { z } from 'zod';
import { newsletterSchema, promoSchema } from './schemas';

export type NewsletterData = z.infer<typeof newsletterSchema>;

export type PromoData = z.infer<typeof promoSchema>;
