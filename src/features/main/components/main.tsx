import Image from 'next/image';

export default function Main() {
  return (
    <div
      className={'font-playfair mx-auto min-h-svh max-w-md py-10 text-center'}
    >
      <h1 className={'text-3xl font-bold'}>Ewa & Adam</h1>
      <div className='mt-10 text-2xl'>
        <p>29 sierpnia 2025</p>
        <p>16:00</p>
      </div>
      <div className='relative mx-auto mt-16 h-[50vh] w-[70vw] max-w-[280px]'>
        <Image
          fill
          src='/pics1.jpg'
          alt='pic1'
          className='h-full w-full rounded-[150px] object-cover drop-shadow-2xl'
        />
      </div>
    </div>
  );
}
