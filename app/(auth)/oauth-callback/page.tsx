'use client';

import { NEXT_PUBLIC_API_URL } from '@/api';
import { useAuthStore } from '@/api/features';
import { useGT } from 'gt-next/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function OAuthCallbackPage() {
  const setAccessToken = useAuthStore(state => state.setAccessToken);
  const router = useRouter();
  const t = useGT();

  useEffect(() => {
    fetch(`${NEXT_PUBLIC_API_URL}/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    })
      .then(res => res.json())
      .then((data: { accessToken: string }) => {
        setAccessToken(data.accessToken);
        router.replace('/profile');
      })
      .catch(() => {
        router.back();
      });
  }, [setAccessToken, router]);

  return (
    <div className="flex h-screen w-screen items-center justify-center text-2xl font-bold">
      <p>{t('Generating access token...')}</p>
    </div>
  );
}
