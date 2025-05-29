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
import { GuestBook } from '@/features/guestbook/libs/types';

export default function GuestBookDrawer(props: GuestBook) {
  const g: GuestBook = props;

  return (
    <Drawer>
      <DrawerTrigger>
        <div className={'space-y-1 text-left text-sm'}>
          <p className='line-clamp-1 font-semibold underline'>{g.author}</p>
          <p className='text-muted-foreground line-clamp-2'>{g.content}</p>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <p className='text-muted-foreground text-xs'>
            {g.createdAt.toDateString()}
          </p>
          <DrawerTitle>{g.author}</DrawerTitle>
          <DrawerDescription>{g.content}</DrawerDescription>
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
