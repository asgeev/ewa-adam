import { z } from 'zod';

export const formSchema = z.object({
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
