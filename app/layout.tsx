import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import type { JSX } from 'react';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MyTop - наш лучший топ',
  description: 'App for creating and sharing top lists',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ru">
      <body className={notoSans.variable}>{children}</body>
    </html>
  );
}
