import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const dividerVariants = cva('', {
  variants: {
    variant: {
      vertical: 'h-12 w-px',
      horizontal: 'w-12 h-px',
    },
    color: {
      white: 'bg-accent',
      black: 'bg-foreground',
    },
    size: {},
  },
  defaultVariants: {
    variant: 'vertical',
  },
});

interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  className,
  variant,
  color,
}) => {
  return (
    <div className={cn(dividerVariants({ className, variant, color }))}></div>
  );
};
