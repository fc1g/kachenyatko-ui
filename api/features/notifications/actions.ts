'use server';

import { INTERNAL_API_URL } from '@/api/config';
import { StatusResponse } from '@/api/types';
import { catchAllActions } from '@/api/utils/catchAllActions';
import { NewsletterData, PromoData } from './types';

export const subscribeToNewsletter = async (
  data: NewsletterData,
): Promise<StatusResponse> =>
  catchAllActions(`${INTERNAL_API_URL}/notifications/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

export const unsubscribeFromNewsletter = async (
  data: NewsletterData,
): Promise<StatusResponse> =>
  catchAllActions<StatusResponse>(
    `${INTERNAL_API_URL}/notifications/unsubscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    },
  );

export const sendPromo = async (data: PromoData): Promise<StatusResponse> =>
  catchAllActions<StatusResponse>(
    `${INTERNAL_API_URL}/notifications/send-promo`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    },
  );
