import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const newsreader = Newsreader({ variable: '--font-newsreader', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://keluarga-kiai-abdul-halim.arif.my'),
  title: 'Salasilah Keluarga Kiai Hj. Abdul Halim',
  description: 'Salasilah keluarga Kiai Hj. Abdul Halim yang menghimpunkan 99 ahli dalam 6 generasi, merangkumi 8 cabang utama keluarga Hj. Shukur dan 11 cabang keluarga Hj. Yusof.',
  openGraph: {
    type: 'website',
    locale: 'ms_MY',
    url: '/',
    title: 'Salasilah Keluarga Kiai Hj. Abdul Halim',
    description: 'Carta salasilah digital keluarga Kiai Hj. Abdul Halim — 99 ahli, 6 generasi dan 8 cabang utama keluarga Hj. Shukur.',
    images: [{ url: '/og-chart.png', width: 1080, height: 856, alt: 'Carta organisasi keluarga Kiai Hj. Abdul Halim' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salasilah Keluarga Kiai Hj. Abdul Halim',
    description: 'Carta salasilah digital keluarga Kiai Hj. Abdul Halim.',
    images: ['/og-chart.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ms"><body className={`${manrope.variable} ${newsreader.variable}`}>{children}</body></html>;
}
