import React from 'react';
import Image from 'next/image';
import { GuestBook } from '@/features/guestbook/libs/types';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import GuestBookDrawer from '@/features/guestbook/components/guest-book-drawer';

export default function Guestbook() {
  const greetings: GuestBook[] = [];

  return (
    <>
      <div className='mx-auto max-w-sm px-2 py-10'>
        <Image
          src='/wedding-rings.png'
          alt='rings'
          width={40}
          height={40}
          className='mb-2'
        />
        <div className='flex items-center justify-between'>
          <h1 className='text-lg font-bold'>e-Księga Gości</h1>
          <Button size='sm' variant='outline' className='rounded-full'>
            Dodaj <Plus />
          </Button>
        </div>
        <div className='mt-8'>
          <p className='font-bold'>Najnowsze:</p>
        </div>
        <div className='mt-8 flex flex-col gap-6'>
          {greetings.map((g: GuestBook, index: number) => (
            <GuestBookDrawer key={index} {...g} />
          ))}
        </div>
      </div>
    </>
  );
}
