import React from 'react';
import GuestBookItem from '@/features/guestbook/components/guestbook-item';
import type { Guestbook } from '@prisma/client';

type GuestbookListProps = {
  guestbook: Guestbook[];
};

export default async function GuestbookList({ guestbook }: GuestbookListProps) {
  if (!guestbook || guestbook?.length <= 0)
    return (
      <p className='text-muted-foreground text-center font-bold'>Brak życzeń</p>
    );
  return (
    <div className='mt-8 flex flex-col gap-6'>
      {guestbook?.map((g: Guestbook) => (
        <GuestBookItem
          key={g.id}
          content={g.content ?? ''}
          createdAt={g.createdAt}
          author={g.author}
        />
      ))}
    </div>
  );
}
