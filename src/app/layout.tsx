import type { Metadata } from 'next';
import { Inter, Playfair } from 'next/font/google';
import './globals.css';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body
        className={`${inter.variable} ${playfair.variable} dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
