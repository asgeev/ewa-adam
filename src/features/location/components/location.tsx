import { Divider } from '@/components/divider';

export default function Location() {
  return (
    <div>
      <div className='font-playfair space-y-2 text-center text-2xl md:text-3xl'>
        <p>Dwór Anna</p>
        <p>ul. Lubelska 3</p>
        <p>21-003</p>
        <p>
          Jakubowice <br />
          Konińskie-Kolonia
        </p>
      </div>
      <div className='flex justify-center py-12'>
        <Divider color='black' />
      </div>
      <div className='mx-auto h-[50vh] w-[80vw] sm:w-screen'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.7353512156114!2d22.530573077599836!3d51.3159931246669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225a54eb441e3b%3A0x6e6b6c64cee1549d!2sDw%C3%B3r%20Anna!5e0!3m2!1spl!2spl!4v1744407325877!5m2!1spl!2spl'
          width='100%'
          height='100%'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
}
