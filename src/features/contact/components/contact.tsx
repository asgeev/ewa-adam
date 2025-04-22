import { ContactItem } from '@/features/contact/components/contact-item';
import Image from 'next/image';
import { Divider } from '@/components/divider';
import {contact} from "@/features/contact/lib/utils";

export default function Contact() {
  return (
    <div className='bg-[#024C3B]'>
      <div className='font-playfair mx-auto min-h-svh max-w-lg px-8 py-20 text-white'>
        <div className='flex flex-col items-center justify-between'>
          <p className='mb-16 text-center text-2xl'>Skontaktuj się z nami!</p>
          <div className='w-full max-w-2xl'>
            <div className='flex justify-between'>
              <ContactItem
                name={'Ewa'}
                number={contact.ewa.phone || '696 969 696'}
                faceboook={contact.ewa.facebook || 'https://www.facebook.com/'}
                instagram={contact.ewa.instagram || 'https://www.instagram.com/'}
              />
              <ContactItem
                name={'Ola'}
                number={contact.ola.phone || '696 969 696'}
                faceboook={contact.ola.facebook || 'https://www.facebook.com/'}
                instagram={contact.ola.instagram || 'https://www.instagram.com/'}
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
                name={'Adam'}
                number={contact.adam.phone || '696 969 696'}
                faceboook={contact.adam.facebook || 'https://www.facebook.com/'}
                instagram={contact.adam.instagram || 'https://www.instagram.com/'}
              />
              <ContactItem
                name={'Jarek'}
                number={contact.jarek.phone || '696 969 696'}
                faceboook={contact.jarek.facebook || 'https://www.facebook.com/'}
                instagram={contact.jarek.instagram || 'https://www.instagram.com/'}
                right
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
