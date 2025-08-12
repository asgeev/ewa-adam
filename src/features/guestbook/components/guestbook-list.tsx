import React from 'react';
import GuestBookItem from '@/features/guestbook/components/guest-book-item';
import type { Guestbook } from '@prisma/client';

type GuestbookListProps = {
  guestbook: Guestbook[];
  showDate?: boolean;
};

export default async function GuestbookList({
  guestbook,
  showDate,
}: GuestbookListProps) {
  if (!guestbook || guestbook?.length <= 0)
    return (
      <p className='text-muted-foreground text-center font-bold'>Brak życzeń</p>
    );
  return (
    <div className='mt-8 flex flex-col gap-6'>
      {guestbook?.map((g: Guestbook) => (
        <GuestBookItem
          showDate={showDate}
          key={g.id}
          content={g.content ?? ''}
          createdAt={g.createdAt}
          author={g.author}
        />
      ))}
    </div>
  );
}
