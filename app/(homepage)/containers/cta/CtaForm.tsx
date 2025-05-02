'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGT } from 'gt-next/client';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ctaAction } from './action';
import { ctaSchema } from './schema';
import { CtaFormData } from './type';

export default function CtaForm() {
  const t = useGT();
  const form = useForm<CtaFormData>({
    resolver: zodResolver(ctaSchema),
    defaultValues: {
      email: '',
    },
  });

  // TODO: error handling
  async function submitHandler(data: CtaFormData) {
    try {
      await ctaAction(data);
      toast.success(t('Email submitted successfully'), {
        style: {
          backgroundColor: 'var(--color-custom-secondary)',
          color: 'green',
        },
      });
    } catch (error) {
      console.error('Error submitting form', error);
      toast.error(error instanceof Error ? error.message : (error as string), {
        style: {
          backgroundColor: 'var(--color-custom-secondary)',
          color: 'var(--color-custom-error)',
        },
      });
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
              <FormLabel>{t('email')}</FormLabel>
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
