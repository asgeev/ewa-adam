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
        <div className='border border-border rounded-md p-4 shadow'>
            <div className='flex font-medium'>
                <div className={'flex-1'}>
                    <p className='text-muted-foreground text-xs flex items-center gap-0.5'>
                        {team} Team
                    </p>
                    <p className='text-xl font-semibold'>
                        {name}
                    </p>
                </div>
                <div className='border border-border rounded-full'>
                    <Image src={icon} alt='facebook' height={30} width={30} className='invert m-1.5'/>
                </div>
            </div>
            <div className='flex gap-1 mt-4'>
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

