'use client';

import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '@/features/guestbook/libs/schema';
import { toast } from 'sonner';
import { useState } from 'react';
import createGuestbook from '@/features/guestbook/actions/create-guestbook';
import { LoaderCircle } from 'lucide-react';

export default function GuestbookForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: '',
      content: '',
    },
    disabled: loading,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const validatedFields = formSchema.safeParse(values);
    if (!validatedFields.success) {
      console.log(validatedFields.error);
      return;
    }
    setLoading(true);
    try {
      await createGuestbook(values);
      toast('Dziękujemy! Życzenia zostały dodane');
      form.reset();
    } catch (err) {
      console.error(
        'Submit form error [submit - create guestbook] - Error:',
        err,
      );
      toast('Wystapił błąd! Spróbuj ponownie później');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='author'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Autor' {...field} className='text-sm' />
              </FormControl>

              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder='Treść życzeń'
                  {...field}
                  className='min-h-40 text-sm'
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        <Button className='mt-4 w-full' type='submit' disabled={loading}>
          {loading ? (
            <>
              <LoaderCircle className='mr-2 h-5 w-5 animate-spin' />
              Przesyłanie
            </>
          ) : (
            'Prześlij'
          )}
        </Button>
      </form>
    </Form>
  );
}
