'use client';

import { NewsletterData, newsletterSchema, subscribeToNewsletter } from '@/api';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGT } from 'gt-next/client';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function CtaForm() {
  const t = useGT();
  const form = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  async function submitHandler(data: NewsletterData) {
    try {
      const { message, statusCode } = await subscribeToNewsletter(data);

      if (statusCode === 200) {
        toast.success(t(message), {
          style: {
            backgroundColor: 'var(--color-custom-secondary)',
            color: 'var(--color-custom-success)',
          },
        });
        form.reset();
      } else {
        toast.error(t(message), {
          style: {
            backgroundColor: 'var(--color-custom-secondary)',
            color: 'var(--color-custom-error)',
          },
        });
      }
    } catch (error) {
      console.error('Error submitting form', error);
      toast.error(
        t(error instanceof Error ? error.message : (error as string)),
        {
          style: {
            backgroundColor: 'var(--color-custom-secondary)',
            color: 'var(--color-custom-error)',
          },
        },
      );
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="inline-flex w-full items-end gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>{t('Email')}</FormLabel>
              <FormControl>
                <Input
                  className="focus:ouline-none focus-visible:ring-custom-secondary bg-white"
                  placeholder="example@gmail.com"
                  required
                  type="email"
                  {...field}
                />
              </FormControl>

              {form.formState.errors.email && (
                <FormMessage>{form.formState.errors.email.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <Button
          variant="secondary"
          disabled={form.formState.isSubmitting}
          type="submit"
          className="focus:ouline-none focus-visible:ring-custom-secondary cursor-pointer"
        >
          {form.formState.isSubmitting ? t('Submitting...') : t('Submit')}
        </Button>
      </form>
    </Form>
  );
}
