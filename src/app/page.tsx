import Section from '@/components/section';
import Main from '@/features/main/components/main';

export default function Home() {
  return (
    <div className='h-full w-full snap-y snap-mandatory overflow-y-scroll'>
      <Section className='bg-background'>
        <Main />
      </Section>
      <Section className='bg-blue-400'></Section>
    </div>
  );
}
