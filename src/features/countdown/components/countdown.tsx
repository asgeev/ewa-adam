'use client';

import React, {useEffect, useMemo, useState} from 'react';
import Image from 'next/image';

// Utility to calculate time remaining
const calculateTimeRemaining = (endDate: Date) => {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {days, hours, minutes, seconds, isExpired: difference < 0};
};

// Props for countdown items
interface CountdownItemProps {
    value: number;
    label: string;
}

// External countdown item component
const CountdownItem: React.FC<CountdownItemProps> = ({value, label}) => (
    <div className='flex flex-col items-center justify-center gap-1 text-center'>
        <p className='text-xl'>{value}</p>
        <p className='text-xs text-muted-foreground'>{label}</p>
    </div>
);

// Main countdown component
export const Countdown = () => {
    const targetDate = useMemo(() => new Date('2025-08-29T16:00:00'), []);
    const [timeRemaining, setTimeRemaining] = useState(
        calculateTimeRemaining(targetDate),
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(targetDate));
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [targetDate]);

    if (timeRemaining.isExpired) {
        return (
            <div className='max-w-sm px-2 mx-auto'>
                <div className='bg-primary rounded-xl p-6'>
                    <div className='flex gap-4 items-center'>
                        <Image src='/rings.png' alt='Rings' width={52} height={52} className='invert m-1.5'
                               loading='lazy'/>
                        <div>
                            <p className='font-semibold text-accent'>Zaczynamy imprezę!</p>
                            <p className='text-sm text-muted-foreground'>Bawcie się dobrze</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    return (
        <div className='max-w-sm px-2 mx-auto'>
            <div className='flex flex-col justify-center'>
                <p className='text-center text-xs my-1 text-muted-foreground'>Odliczaj razem z nami!</p>
                <div
                    className='mx-auto gap-2 flex justify-between items-center bg-primary rounded-xl p-6 w-full text-accent'>
                    <CountdownItem value={timeRemaining.days} label='Dni'/>
                    <span className='text-muted-foreground'> | </span>
                    <CountdownItem value={timeRemaining.hours} label='Godziny'/>
                    <span className='text-muted-foreground'> | </span>
                    <CountdownItem value={timeRemaining.minutes} label='Minuty'/>
                    <span className='text-muted-foreground'> | </span>
                    <CountdownItem value={timeRemaining.seconds} label='Sekundy'/>
                </div>
            </div>
        </div>
    );
};
