import Image from 'next/image';

export default function Main() {
  return (
    <div className={'font-playfair h-11/12 text-center'}>
      <h1 className={'text-3xl font-bold'}>Ewa & Adam</h1>
      <div className='mt-16 text-2xl'>
        <p>29 sierpnia 2025</p>
        <p>16:00</p>
      </div>
      <div className='relative mt-16 h-[50vh] w-[70vw]'>
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
