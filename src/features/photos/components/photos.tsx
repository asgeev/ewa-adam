import { Divider } from '@/components/divider';
import Link from 'next/link';
import Dropzone from '@/features/photos/components/dropzone';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function Photos() {
  return (
    <div className='container mx-auto min-h-svh max-w-md px-8 py-10'>
      <div>
        <h1 className='font-playfair text-center text-2xl'>
          Podziel się swoim zdjęciem!
        </h1>
        <Divider color='black' className='mx-auto my-8' />
      </div>
      <div className='mt-6'>
        <p className='mb-2 text-sm font-medium'>Galeria zdjęć</p>

        <div className='grid grid-cols-2 grid-rows-2 gap-2'>
          <div className='relative col-span-full aspect-video rounded-sm bg-gray-300'>
            {/*<Image*/}
            {/*  src='/pics1.jpg'*/}
            {/*  alt='pic1'*/}
            {/*  fill*/}
            {/*  className='rounded-sm object-cover'*/}
            {/*/>*/}
          </div>
          <div className='relative rounded-sm bg-gray-300'>
            {/*<Image*/}
            {/*  src='/pics1.jpg'*/}
            {/*  alt='pic1'*/}
            {/*  fill*/}
            {/*  className='rounded-sm object-cover'*/}
            {/*/>*/}
          </div>
          <div className='relative rounded-sm bg-gray-300'>
            {/*<Image*/}
            {/*  src='/pics1.jpg'*/}
            {/*  alt='pic1'*/}
            {/*  fill*/}
            {/*  className='rounded-sm object-cover'*/}
            {/*/>*/}
          </div>
        </div>
        <div className='mb-8 flex items-center justify-end'>
          <Button variant='link' asChild disabled>
            <Link href={'#'} className='flex items-center text-sm'>
              Zobacz więcej <ArrowRight />
            </Link>
          </Button>
        </div>
        <Dropzone />
        <p className='mt-1 text-sm font-medium'>
          * Funkcja wrzucania zdjęć będzie dostępna w dniu ślubu
        </p>
      </div>
    </div>
  );
}
