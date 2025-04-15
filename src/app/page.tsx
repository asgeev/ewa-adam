import Section from '@/components/section';
import Main from '@/features/main/components/main';
import { Countdown } from '@/features/countdown/components/countdown';
import Contact from '@/features/contact/components/contact';
import Location from '@/features/location/components/location';

export default function Home() {
  return (
    <div className='h-full w-full snap-y snap-mandatory overflow-y-scroll'>
      <Section className='bg-background'>
        <Main />
      </Section>
      <Section>
        <Countdown />
      </Section>
      <Section>
        <Location />
      </Section>
      <Section className='bg-[#024C3B]'>
        <Contact />
      </Section>
    </div>
  );
}
