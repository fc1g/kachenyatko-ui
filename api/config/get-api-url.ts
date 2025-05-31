import { INTERNAL_API_URL, NEXT_PUBLIC_API_URL } from '@/api';

export const getApiUrl = () => {
  const isServer = typeof window === 'undefined';
  return isServer ? INTERNAL_API_URL : NEXT_PUBLIC_API_URL;
};
