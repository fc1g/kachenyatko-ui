import { INTERNAL_API_URL } from '@/api';
import { NextResponse } from 'next/server';

async function proxyRequest(path: string, headers: Record<string, string>) {
  try {
    return await fetch(`${INTERNAL_API_URL}/auth/${path}`, {
      method: 'POST',
      headers,
    });
  } catch (err) {
    console.error('Error proxying request to auth service', err);
    return null;
  }
}

export async function POST(request: Request) {
  const cookie = request.headers.get('cookie');
  const accessToken = request.headers.get('Authorization');

  let backendRes: Response | null = await proxyRequest('logout', {
    Authorization: accessToken || '',
  });

  if (!backendRes) {
    return NextResponse.json(
      { error: 'Auth service is down' },
      { status: 502 },
    );
  }

  if (backendRes.status === 401) {
    const refreshRes = await proxyRequest('refresh', {
      ...(cookie ? { cookie } : {}),
    });

    if (!refreshRes) {
      return NextResponse.json(
        { error: 'Failed to refresh access token' },
        { status: 401 },
      );
    }
    if (!refreshRes.ok) {
      const errBody = (await refreshRes.json().catch(() => null)) ?? {
        error: refreshRes.statusText,
      };
      return NextResponse.json(errBody, { status: refreshRes.status });
    }

    const { accessToken: newAccessToken } = (await refreshRes.json()) as {
      accessToken: string;
    };

    backendRes = await proxyRequest('logout', {
      Authorization: `Bearer ${newAccessToken}`,
    });

    if (!backendRes) {
      return NextResponse.json(
        { error: 'Auth service is down' },
        { status: 502 },
      );
    }
  }

  const responseBody = await backendRes?.json().catch(() => ({
    error: backendRes?.statusText,
  }));

  if (!backendRes.ok) {
    return NextResponse.json(responseBody, { status: backendRes.status });
  }

  const res = NextResponse.json(responseBody, { status: backendRes.status });

  for (const [key, value] of backendRes.headers) {
    if (key.toLowerCase() === 'set-cookie') {
      res.headers.append('set-cookie', value);
    }
  }

  return res;
}
