import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import type { JSX } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Sidebar } from '@/components/Sidebar/Sidebar';

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
      <body className={notoSans.variable}>
        <div className='wrapper'>
          <Header className='header'/>
            <Sidebar className='sidebar'/>
            <main className='main'>{children}</main>
          <Footer className='footer'/>
        </div>
      </body>
    </html>
  );
}
