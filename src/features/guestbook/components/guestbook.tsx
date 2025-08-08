import React from 'react';
import Image from 'next/image';
import AddGuestBookDrawer from '@/features/guestbook/components/add-guest-book-drawer';
import prisma from '@/lib/prisma';
import GuestBookDrawer from '@/features/guestbook/components/guest-book-drawer';
import type { Guestbook } from '@prisma/client';

export default async function Guestbook() {
  const guestbook = await prisma.guestbook.findMany();
  
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
          <AddGuestBookDrawer />
        </div>
        <div className='mt-8'>
          <p className='font-bold'>Najnowsze:</p>
        </div>
        <div className='mt-8 flex flex-col gap-6'>
          {guestbook?.map((g: Guestbook) => (
            <div>
              <GuestBookDrawer
                key={g.id}
                content={g.content ?? ''}
                createdAt={g.createdAt}
                author={g.author}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
