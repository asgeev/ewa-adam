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
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react';
import GuestbookForm from '@/features/guestbook/components/guestbook-form';

export default function AddGuestBookDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size='sm' variant='outline' className='rounded-full'>
          Dodaj <Plus />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>Dodaj życzenia</DrawerTitle>
            <DrawerDescription>
              Uzupełnij pola i prześlij nam życzenia
            </DrawerDescription>
          </DrawerHeader>
          <div className='px-4 pt-2 pb-0'>
            <GuestbookForm />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant='outline'>Anuluj</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
