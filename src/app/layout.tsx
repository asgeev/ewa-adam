import type { Metadata } from 'next';
import { Inter, Playfair } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ewa-Adam',
  description: 'Strona ślubna Ewy i Adama',
  other: {
    viewport:
      'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, viewport-fit=cover',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl' className='scroll-smooth'>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        <Toaster position='top-right' />
        <p className='text-muted-foreground my-4 text-center text-xs'>
          © ewa-adam.pl, 2025 All rights reserved.
        </p>
      </body>
    </html>
  );
}
