import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const newsreader = Newsreader({ variable: '--font-newsreader', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://keluarga-kiai-abdul-halim.arif.my'),
  applicationName: 'Salasilah Keluarga Kiai Hj. Abdul Halim',
  title: 'Salasilah Keluarga Kiai Hj. Abdul Halim',
  description: 'Salasilah digital Kiai Hj. Abdul Halim: 99 ahli, 6 generasi, 8 cabang keluarga Hj. Shukur dan 11 cabang keluarga Hj. Yusof.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ms_MY',
    siteName: 'Salasilah Keluarga Kiai Hj. Abdul Halim',
    url: '/',
    title: 'Salasilah Keluarga Kiai Hj. Abdul Halim',
    description: 'Carta salasilah digital keluarga Kiai Hj. Abdul Halim — 99 ahli, 6 generasi dan 8 cabang utama keluarga Hj. Shukur.',
    images: [{ url: '/og-chart-1200x630.png', width: 1200, height: 630, type: 'image/png', alt: 'Carta organisasi keluarga Kiai Hj. Abdul Halim — lihat carta keluarga' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salasilah Keluarga Kiai Hj. Abdul Halim',
    description: 'Carta salasilah digital keluarga Kiai Hj. Abdul Halim.',
    images: ['/og-chart-1200x630.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ms"><body className={`${manrope.variable} ${newsreader.variable}`}>{children}</body></html>;
}
