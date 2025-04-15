import { ContactItem } from '@/features/contact/components/contact-item';
import Image from 'next/image';
import { Divider } from '@/components/divider';

export default function Contact() {
  return (
    <div className='font-playfair container mx-auto h-full w-full max-w-lg p-8 text-white'>
      <div className='flex flex-col items-center justify-between'>
        <p className='mt-6 mb-16 text-center text-2xl'>
          Skontaktuj się z nami!
        </p>
        <div className='w-full max-w-2xl'>
          <div className='flex justify-between'>
            <ContactItem
              name={'Ewa'}
              number={'696 969 696'}
              faceboook={'https://www.facebook.com/'}
              instagram={'https://www.instagram.com/'}
            />
            <ContactItem
              name={'Ewa'}
              number={'696 969 696'}
              faceboook={'https://www.facebook.com/'}
              instagram={'https://www.instagram.com/'}
              right
            />
          </div>
          <div className='my-8 flex w-full flex-col items-center justify-center gap-16'>
            <Image src='/bride.png' alt='facebook' height={64} width={64} />
            <Divider variant='horizontal' color='white' />
            <Image src='/groom.png' alt='facebook' height={64} width={64} />
          </div>

          <div className='flex justify-between'>
            <ContactItem
              name={'Ewa'}
              number={'696 969 696'}
              faceboook={'https://www.facebook.com/'}
              instagram={'https://www.instagram.com/'}
            />
            <ContactItem
              name={'Ewa'}
              number={'696 969 696'}
              faceboook={'https://www.facebook.com/'}
              instagram={'https://www.instagram.com/'}
              right
            />
          </div>
        </div>
      </div>
    </div>
  );
}
