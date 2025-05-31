'use client';

import { NEXT_PUBLIC_API_URL, StatusResponse } from '@/api';
import {
  AuthFormField,
  AuthResponseType,
  createUserSchema,
  CreateUserType,
  loginUserSchema,
  LoginUserType,
  useAuthStore,
} from '@/api/features';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
} from '@/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGT } from 'gt-next/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

type AuthFormProps = {
  actionType: 'Signup' | 'Login';
  actionDescription: string;
  formFields: AuthFormField[];
};

export function AuthForm({
  formFields,
  actionType,
  actionDescription,
}: AuthFormProps) {
  const setAccessToken = useAuthStore(state => state.setAccessToken);
  const form = useForm<CreateUserType | LoginUserType>({
    resolver: zodResolver(
      actionType === 'Signup' ? createUserSchema : loginUserSchema,
    ),
    defaultValues: {
      email: '',
      password: '',
      ...(actionType === 'Signup' && { passwordConfirm: '' }),
    },
  });
  const t = useGT();
  const router = useRouter();
  const isSignup = actionType.toLowerCase() === 'signup';

  const startOauth = useCallback(() => {
    window.location.href = `${NEXT_PUBLIC_API_URL}/auth/google`;
  }, []);

  async function onSubmit(data: CreateUserType | LoginUserType) {
    try {
      const res = await fetch(`/api/auth/${actionType.toLowerCase()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });
      const responseBody = (await res.json()) as
        | AuthResponseType
        | StatusResponse;

      if (!res.ok) {
        throw new Error((responseBody as StatusResponse).message);
      }

      setAccessToken((responseBody as AuthResponseType).accessToken);
      router.push('/profile');
    } catch (err) {
      console.error(err);
      form.setError('root', {
        message:
          err instanceof Error ? t(err.message) : t('Invalid credentials'),
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-6"
      >
        {formFields.map(({ name, label, placeholder, type, required }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t(label)}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={placeholder}
                    required={required}
                    type={type}
                    {...field}
                  />
                </FormControl>
                {form.formState.errors[
                  name as keyof typeof form.formState.errors
                ] && (
                  <FormMessage>
                    {t(
                      form.formState.errors[
                        name as keyof typeof form.formState.errors
                      ]?.message ?? '',
                    )}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
        ))}

        {form.formState.errors.root && (
          <div className="text-destructive">
            {t(form.formState.errors.root.message ?? '')}
          </div>
        )}

        {actionType === 'Login' && (
          <div className="flex items-center justify-end">
            <Button variant="link" type="button" asChild>
              <Link href="/account/password">{t('Reset password')}</Link>
            </Button>
          </div>
        )}

        <Button
          className="w-full cursor-pointer"
          variant="default"
          size="lg"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? t('Loading...')
            : isSignup
              ? t('Signup')
              : t('Login')}
        </Button>

        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-sm">
            {t(`Or ${actionType.toLowerCase()} with`)}
          </span>
          <Button
            className="w-full cursor-pointer"
            variant="outline"
            size="lg"
            onClick={startOauth}
          >
            <svg className="h-6 w-6">
              <use href="/icons/sprite.svg#google" />
            </svg>
          </Button>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-sm">{t(actionDescription)}</span>
          <Button
            className="w-full cursor-pointer"
            variant="outline"
            size="lg"
            asChild
          >
            <Link href={`/${actionType === 'Signup' ? 'login' : 'signup'}`}>
              {t(actionType === 'Signup' ? 'Login' : 'Signup')}
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
