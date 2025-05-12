'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export default function Dropzone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop,
    disabled: true,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} className='hidden' />
      <Button className='w-full' disabled>
        Prześlij zdjęcie <Upload />
      </Button>
    </div>
  );
}
