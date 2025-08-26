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

type GuestbookItem = {
  author: string;
  createdAt: Date;
  content: string;
};

export default function GuestBookItem(props: GuestbookItem) {
  const { content, author, createdAt } = props;

  return (
    <Drawer>
      <DrawerTrigger>
        <div className={'space-y-1 text-left text-sm'}>
          <div className='flex items-center justify-between'>
            <p className='line-clamp-1 font-semibold underline'>{author}</p>
          </div>
          <p className='text-muted-foreground line-clamp-2'>{content}</p>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <Date date={createdAt} />
          <DrawerTitle>{author}</DrawerTitle>
          <DrawerDescription>{content}</DrawerDescription>
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
