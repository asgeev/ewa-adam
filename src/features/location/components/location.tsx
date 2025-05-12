import Image from 'next/image';
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Location() {
    return (
        <div className='mx-auto max-w-sm px-2 py-10'>
            <div className='rounded-md border border-border shadow-md'>
                <div className='aspect-video relative w-full max-h-40'>
                    <Image src="/pic.jpg" alt="pic" fill className='rounded-t-md' objectFit='cover' loading='lazy'/>
                </div>
                <div className='p-4'>
                    <div>
                        <p className='font-bold text-lg'>Dwór Anna</p>
                        <p className='text-muted-foreground text-sm'>ul. Lubelska 3</p>
                        <p className='text-muted-foreground text-sm'>21-003, Jakubowice Konińskie-Kolonia</p>
                    </div>
                    <Button className='w-full mt-8' asChild><Link href='https://maps.app.goo.gl/VpRd8NThNthcXqtL6'
                                                                  target='_blank'>Zobacz
                        na mapie <ArrowRight/></Link></Button>
                </div>
            </div>
        </div>
    );
}
