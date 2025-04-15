import { Divider } from '@/components/divider';
import Dropzone from './dropzone';

export default function Photos() {
  return (
    <div className='font-playfair container mx-auto w-full max-w-lg p-8'>
      <h1 className='text-center text-2xl'>Podziel się swoim zdjęciem!</h1>
      <Divider color='black' className='mx-auto my-8' />
      <div className='mx-auto max-w-lg'>
        <Dropzone />
      </div>
    </div>
  );
}
