import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import React from 'react';
import { Button } from '@/components/ui/button';
import type { Guestbook } from '@prisma/client';

const Date = ({ date }: { date: Date }) => {
  if (!date) return null;

  return (
    <p className='text-muted-foreground text-xs'>
      {date.toLocaleDateString('pl', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}
      {' | '}
      {date.toLocaleTimeString('pl')}
    </p>
  );
};

type GuestBookItem = Omit<Guestbook, 'id'>;

interface DrawerGuestbookProps extends GuestBookItem {
  showDate?: boolean;
}

export default function GuestBookItem({
  showDate = true,
  ...restProps
}: DrawerGuestbookProps) {
  const item = restProps;

  return (
    <Drawer>
      <DrawerTrigger>
        <div className={'space-y-1 text-left text-sm'}>
          <div className='flex items-center justify-between'>
            <p className='line-clamp-1 font-semibold underline'>
              {item.author}
            </p>
          </div>
          <p className='text-muted-foreground line-clamp-2'>{item.content}</p>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <Date date={item.createdAt} />
          <DrawerTitle>{item.author}</DrawerTitle>
          <DrawerDescription>{item.content}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant='outline'>Zamknij</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
