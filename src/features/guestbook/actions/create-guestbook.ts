'use server';

import { formSchema } from '@/features/guestbook/libs/schema';
import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

type CreateProps = Prisma.GuestbookCreateInput;

const createGuestbook = async (values: CreateProps) => {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    console.log(
      'Server action error [create guestbook] - Validation error: ',
      validatedFields.error.message,
    );
    return validatedFields.error;
  }

  try {
    await prisma.guestbook.create({ data: values });
    revalidatePath('/');
  } catch (err) {
    console.log(
      'Server action error [create guestbook] - Error occurred: ',
      err,
    );
  }
};

export default createGuestbook;
