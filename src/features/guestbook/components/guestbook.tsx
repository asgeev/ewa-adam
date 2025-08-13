import React from 'react';
import Image from 'next/image';
import AddGuestBookDrawer from '@/features/guestbook/components/add-guest-book-drawer';
import prisma from '@/lib/prisma';
import GuestbookList from '@/features/guestbook/components/guestbook-list';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default async function Guestbook() {
  const guestbook = await prisma.guestbook.findMany({
    orderBy: { id: 'desc' },
    take: 3,
  });

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
        <GuestbookList guestbook={guestbook} />

        <Button variant='link' asChild className='float-right mt-4'>
          <Link href={'/guestbook'}>
            Zobacz wiecej
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </>
  );
}
