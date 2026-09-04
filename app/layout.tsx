import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const newsreader = Newsreader({ variable: '--font-newsreader', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Salasilah Keluarga Kiai Hj. Abdul Halim',
  description: 'Salasilah keluarga Kiai Hj. Abdul Halim hingga enam generasi.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ms"><body className={`${manrope.variable} ${newsreader.variable}`}>{children}</body></html>;
}
