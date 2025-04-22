import Image from 'next/image';
import Link from 'next/link';

interface ContactItemProps {
  name: string;
  number: string;
  faceboook: string;
  instagram: string;
  right?: boolean;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  name,
  number,
  faceboook,
  instagram,
  right,
}) => (
  <div className={`${right ? 'text-right' : ''}`}>
    <p className='mb-1 text-2xl font-semibold'>{name}</p>
    <Link href={`tel:${number}`} className=' text-xl'>{number}</Link>
    <div className={`${right && 'justify-end'} flex gap-4 mt-2`}>
      <Link href={faceboook} target='_blank'>
        <Image src='/facebook.png' alt='facebook' height={32} width={32} />
      </Link>
      <Link href={instagram} target='_blank'>
        <Image src='/instagram.png' alt='instagram' height={32} width={32} />
      </Link>
    </div>
  </div>
);
