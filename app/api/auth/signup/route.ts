import { INTERNAL_API_URL, StatusResponse } from '@/api';
import {
  AuthResponseType,
  createUserSchema,
  CreateUserType,
} from '@/api/features';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let parsedBody: CreateUserType;
  try {
    const requestBody = (await request.json()) as CreateUserType;
    parsedBody = createUserSchema.parse(requestBody);
  } catch (err) {
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : err || 'Please provide valid credentials',
      },
      { status: 400 },
    );
  }

  let backendRes: Response;

  try {
    backendRes = await fetch(`${INTERNAL_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: parsedBody.email,
        password: parsedBody.password,
      }),
    });
  } catch (err) {
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : err || 'Auth service is down',
      },
      { status: 502 },
    );
  }

  const responseBody = (await backendRes?.json().catch(() => ({
    error: backendRes?.statusText,
  }))) as AuthResponseType | StatusResponse;

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
