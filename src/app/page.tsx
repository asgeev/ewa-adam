import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex min-h-[100dvh] flex-col items-center justify-center'>
      <Image
        src='/rings.png'
        alt='Rings'
        width={100}
        height={100}
        className='invert'
        priority
      />
      <h1 className={`mt-10 mb-4 text-3xl font-bold`}>Strona w budowie</h1>
      <p className='text-muted-foreground mb-20 font-medium'>
        zajrzyj tutaj za jakiś czas
      </p>
    </div>
  );
}
