import Main from '@/features/main/components/main';
import { Countdown } from '@/features/countdown/components/countdown';
import Contact from '@/features/contact/components/contact';
import Location from '@/features/location/components/location';
import Photos from '@/features/photos/components/photos';

export default function Home() {
  return (
    <div>
      <Main />
      <Countdown />
      <Location />
      <Contact />
      <Photos />
    </div>
  );
}
