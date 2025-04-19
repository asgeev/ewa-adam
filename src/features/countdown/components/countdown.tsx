'use client';

import React, { useEffect, useState } from 'react';
import { Divider } from '@/components/divider';
import { Clock } from 'lucide-react';

// Utility to calculate time remaining
const calculateTimeRemaining = (endDate: Date) => {
  const now = new Date();
  const difference = endDate.getTime() - now.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds, isExpired: difference < 0 };
};

// Props for countdown items
interface CountdownItemProps {
  value: number;
  label: string;
}

// External countdown item component
const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => (
  <div>
    <p className='text-4xl'>{value}</p>
    <p className='text-sm'>{label}</p>
  </div>
);

// Main countdown component
export const Countdown = () => {
  const targetDate = new Date('2025-08-29T16:00:00'); // Replace with your target date
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
      <div className='text-accent flex min-h-svh items-center justify-center bg-[#18181B]'>
        <div className='font-playfair space-y-6 text-center'>
          <p className='mb-20 text-8xl'>🎉</p>
          <p className='text-4xl font-bold'>Zaczynamy imprezę!</p>
          <p className='text-muted-foreground text-2xl'>Bawcie się dobrze!</p>
        </div>
      </div>
    );
  }

  return (
    <div className='text-accent flex bg-[#18181B] py-10'>
      <div className='font-playfair mx-auto max-w-md text-center'>
        <h1 className='mb-4 text-3xl'>Odliczaj razem z nami!</h1>
        <Divider color='white' variant='vertical' className='mx-auto my-8' />

        <div className='mx-auto flex flex-col justify-center'>
          <div className='mx-auto my-8'>
            <Clock size={60} />
          </div>
          <div className='mx-auto mt-6 flex items-center gap-4'>
            <CountdownItem value={timeRemaining.days} label='Dni' />
            {':'}
            <CountdownItem value={timeRemaining.hours} label='Godziny' />
            {':'}
            <CountdownItem value={timeRemaining.minutes} label='Minuty' />
            {':'}
            <CountdownItem value={timeRemaining.seconds} label='Sekundy' />
          </div>
        </div>
      </div>
    </div>
  );
};
