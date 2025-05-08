import {ContactItem} from '@/features/contact/components/contact-item';
import {contact} from "@/features/contact/lib/utils";
import {Divider} from "@/components/divider";

export default function Contact() {
    const phone = '111 111 111';
    const facebook = 'https://www.facebook.com/';
    const instagram = 'https://www.instagram.com/';

    return (
        <div>
            <div className='mx-auto max-w-sm px-2 py-10'>
                <div className='flex flex-col items-center justify-between'>
                    <p className=' text-2xl font-playfair'>Skontaktuj się z nami!</p>
                    <Divider color='black' className='mx-auto my-8'/>
                    <div className='flex flex-col gap-4 w-full'>
                        <ContactItem
                            name={'Ewa'}
                            number={contact.ewa.phone || phone}
                            facebook={contact.ewa.facebook || facebook}
                            instagram={contact.ewa.instagram || instagram}
                            team={'Bride'}
                        />

                        <ContactItem
                            name={'Ola'}
                            number={contact.ola.phone || phone}
                            facebook={contact.ola.facebook || facebook}
                            instagram={contact.ola.instagram || instagram}
                            team={'Bride'}
                        />

                        <ContactItem
                            name={'Adam'}
                            number={contact.adam.phone || phone}
                            facebook={contact.adam.facebook || facebook}
                            instagram={contact.adam.instagram || instagram}
                            team={'Groom'}
                        />

                        <ContactItem
                            name={'Jarek'}
                            number={contact.jarek.phone || phone}
                            facebook={contact.jarek.facebook || facebook}
                            instagram={contact.jarek.instagram || instagram}
                            team={'Groom'}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}
