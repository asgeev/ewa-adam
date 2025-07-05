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

const formSchema = z.object({
  author: z
    .string()
    .min(3, {
      message: 'Minimum 3 znaki',
    })
    .max(100, { message: 'Maksimum 100 znaków' }),
  content: z
    .string()
    .min(3, {
      message: 'Minimum 3 znaki',
    })
    .max(1000, { message: 'Max 1000 znaków' }),
});

export default function GuestbookForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: '',
      content: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
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
        <Button className='mt-4 w-full' type='submit'>
          Prześlij
        </Button>
      </form>
    </Form>
  );
}
