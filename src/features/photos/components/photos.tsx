import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import env from '@/lib/env-schema';

export default function Photos() {
  const url = env.DRIVE_URL;
  return (
    <div className='mx-auto max-w-sm px-2 py-10'>
      <div>
        <h1 className='mb-2 text-lg font-bold'>Podziel się swoim zdjęciem!</h1>
      </div>
      <div className='mt-6'>
        <div className='relative aspect-square w-full'>
          <Image src='/photo-temp.png' alt='google' fill />
        </div>

        <Button asChild className='w-full'>
          <Link href={url ?? '#'} target='_blank' rel='noreferrer'>
            Prześlij pliki <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
