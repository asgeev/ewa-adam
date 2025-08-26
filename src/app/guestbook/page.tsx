import React from 'react';
import Image from 'next/image';
import AddGuestBookDrawer from '@/features/guestbook/components/add-guest-book-drawer';
import prisma from '@/lib/prisma';
import GuestbookList from '@/features/guestbook/components/guestbook-list';
import Link from 'next/link';

export const revalidate = 60;

export default async function GuestbookPage() {
  const guestbook = await prisma.guestbook.findMany({
    orderBy: { id: 'desc' },
  });

  return (
    <>
      <div className={'font-playfair mx-auto min-h-10 py-10 text-center'}>
        <Link href={'/'}>
          <h1 className={'text-3xl font-bold'}>Ewa & Adam</h1>
        </Link>
      </div>
      <div className='mx-auto max-w-sm px-2 py-4'>
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
        <GuestbookList guestbook={guestbook} />
      </div>
    </>
  );
}
