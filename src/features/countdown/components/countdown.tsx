'use client';

import React, { useEffect, useState } from 'react';

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
      <div className='text-accent flex h-full w-full items-center justify-center bg-[#18181B]'>
        <p className='font-playfair text-3xl'>Czas minął! 🎉</p>
      </div>
    );
  }

  return (
    <div className='text-accent flex h-full w-full items-center justify-center bg-[#18181B]'>
      <div className='font-playfair text-center'>
        <h1 className='text-3xl'>Odliczaj razem z nami!</h1>
        <div className='flex flex-col gap-8 pt-16'>
          <CountdownItem value={timeRemaining.days} label='Dni' />
          <CountdownItem value={timeRemaining.hours} label='Godziny' />
          <CountdownItem value={timeRemaining.minutes} label='Minuty' />
          <CountdownItem value={timeRemaining.seconds} label='Sekundy' />
        </div>
      </div>
    </div>
  );
};
