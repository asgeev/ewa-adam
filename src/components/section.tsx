import { cn } from '@/lib/utils';

type SectionProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Section(props: SectionProps) {
  return (
    <section
      className={`${cn(props.className)} flex h-full w-full snap-start items-center justify-center`}
    >
      {props.children}
    </section>
  );
}
