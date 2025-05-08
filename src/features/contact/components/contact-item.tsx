import Image from 'next/image';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {ExternalLink, Phone} from "lucide-react";

interface ContactItemProps {
    name: string;
    number: string;
    facebook: string;
    instagram: string;
    team: 'Bride' | 'Groom'
}

export const ContactItem = (props: ContactItemProps) => {
    const {name, number, facebook, instagram, team} = props

    const icon = team === 'Bride' ? '/bride.png' : '/groom.png'

    return (
        <div className='border border-border rounded-md p-4'>
            <div className='flex items-center justify-between font-medium'>
                <p className='text-muted-foreground text-xs flex items-center gap-0.5'>
                    {team} Team
                </p>
                <div className='border border-border rounded-full'>
                    <Image src={icon} alt='facebook' height={30} width={30} className='invert m-1.5'/>
                </div>
            </div>
            <div className='mt-1'>
                <p className='font-playfair text-2xl font-bold'>
                    {name}
                </p>
            </div>
            <div className='flex gap-1 mt-2'>
                <Button variant='outline' size='sm' asChild><Link href={`tel:${number}`}
                                                                  target='_blank'><Phone/></Link></Button>
                <Button variant='outline' size='sm' className='flex-1' asChild><Link href={facebook}
                                                                                     target='_blank'>Facebook <ExternalLink/></Link></Button>
                <Button variant='outline' size='sm' className='flex-1' asChild><Link href={instagram}
                                                                                     target='_blank'>Instagram <ExternalLink/></Link></Button>
            </div>
        </div>
    )
}

