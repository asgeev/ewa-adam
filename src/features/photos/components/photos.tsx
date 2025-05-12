import Link from 'next/link';
import Dropzone from '@/features/photos/components/dropzone';
import {ArrowRight} from 'lucide-react';
import React from 'react';
import {Button} from '@/components/ui/button';
import Image from 'next/image';

export default function Photos() {
    return (
        <div className='mx-auto max-w-sm px-2 py-10'>
            <div>
                <h1 className="mb-2 text-lg font-bold">
                    Podziel się swoim zdjęciem!
                </h1>
            </div>
            <div className='mt-6'>

                <div className='grid grid-cols-2 grid-rows-2 gap-2'>
                    <div className='relative col-span-full aspect-video rounded-sm bg-gray-300'>
                        <Image
                            src='/pics1.jpg'
                            alt='pic1'
                            fill
                            className='rounded-sm object-cover'
                        />
                    </div>
                    <div className='relative rounded-sm bg-gray-300'>
                        <Image
                            src='/pics1.jpg'
                            alt='pic1'
                            fill
                            className='rounded-sm object-cover'
                        />
                    </div>
                    <div className='relative rounded-sm bg-gray-300'>
                        <Image
                            src='/pics1.jpg'
                            alt='pic1'
                            fill
                            className='rounded-sm object-cover'
                        />
                    </div>
                </div>
                <div className='mb-8 flex items-center justify-end'>
                    <Button variant='link' asChild disabled>
                        <Link href={'#'} className='flex items-center text-sm'>
                            Zobacz więcej <ArrowRight/>
                        </Link>
                    </Button>
                </div>
                <Dropzone/>
                <p className='mt-1 text-xs font-medium text-muted-foreground'>
                    * Funkcja wrzucania zdjęć będzie dostępna w dniu ślubu
                </p>
            </div>
        </div>
    );
}
