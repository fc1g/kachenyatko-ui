'use client';

import { useAuthStore } from '@/api/features';

export default function ProfilePage() {
  const accessToken = useAuthStore(state => state.accessToken);
  return <div>{accessToken ?? 'No access token'}</div>;
}
