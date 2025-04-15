'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

export default function Dropzone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled: true,
  });

  return (
    <div
      {...getRootProps()}
      className='rounded-md border-1 border-dashed border-gray-400 py-6'
    >
      <input {...getInputProps()} className='hidden' />
      {isDragActive ? (
        <p>Upuść pliku tutaj ...</p>
      ) : (
        <div className='flex flex-col items-center justify-center gap-6'>
          <Image
            src='/cloud-upload.svg'
            alt='upload'
            width={80}
            height={80}
            className='stroke-red-50'
          />
          <p className='text-muted-foreground font-inter text-center text-sm'>
            Naciśnij na to pole aby przesłać zdjęcie
          </p>
        </div>
      )}
    </div>
  );
}
