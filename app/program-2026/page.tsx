import type { Metadata } from 'next';
import { ArrowLeft, CalendarDays, Clock3, Leaf, MapPin, MessageCircle, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Program Keluarga 2026 | Kiai Hj. Abdul Halim',
  description: 'Maklumat dan atur cara Perhimpunan Keluarga Besar Haji Shukur pada 12 September 2026 di Taman Koperasi Polis Fasa 2, Kuala Lumpur.',
  alternates: { canonical: '/program-2026' },
  openGraph: {
    type: 'website',
    locale: 'ms_MY',
    siteName: 'Salasilah Keluarga Kiai Hj. Abdul Halim',
    url: '/program-2026',
    title: 'Program Perhimpunan Keluarga 2026',
    description: 'Perhimpunan Keluarga Besar Haji Shukur pada 12 September 2026 di Taman Koperasi Polis Fasa 2, Kuala Lumpur.',
    images: [{ url: '/events/program-2026-1200x630.png', width: 1200, height: 630, type: 'image/png', alt: 'Poster rasmi Perhimpunan Keluarga Besar Haji Shukur 2026 — lihat program dan lokasi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Program Perhimpunan Keluarga 2026',
    description: 'Perhimpunan Keluarga Besar Haji Shukur pada 12 September 2026.',
    images: ['/events/program-2026-1200x630.png'],
  },
};

const contactWhatsAppUrl = `https://wa.me/601140030076?text=${encodeURIComponent('Assalamualaikum, saya ingin bertanya mengenai Program Perhimpunan Keluarga 2026.')}`;
const eventWazeUrl = `https://www.waze.com/ul?q=${encodeURIComponent('Dewan Orang Ramai Taman Koperasi Polis Fasa 2, Kuala Lumpur')}&navigate=yes`;

const schedule = [
  ['10:30 pagi', 'Ketibaan ahli keluarga'],
  ['11:00 pagi', 'Ucapan aluan'],
  ['11:05 pagi', 'Tahlil & bacaan doa'],
  ['11:45 pagi', 'Ucapan suai kenal & jamuan makan'],
  ['1:00 petang', 'Solat Zohor'],
  ['2:00 petang', 'Silaturrahim'],
  ['3:00 petang', 'Bersurai'],
];

export default function Program2026() {
  return (
    <main className="event-page">
      <header className="event-header">
        <a className="brand" href="/" aria-label="Kembali ke halaman utama"><span className="brand-mark"><Leaf aria-hidden="true" size={19} /></span><span>Salasilah Keluarga Kiai Hj. Abdul Halim</span></a>
        <a className="event-back" href="/"><ArrowLeft aria-hidden="true" size={17} /> Kembali ke salasilah</a>
      </header>

      <section className="event-hero">
        <div className="event-hero-copy">
          <p className="event-kicker">Perhimpunan keluarga · 2026</p>
          <h1>Majlis Keluarga Besar Haji Shukur</h1>
          <p className="event-lead">Menghimpunkan ahli keluarga untuk bertahlil, berkenalan dan mengeratkan silaturrahim.</p>
          <div className="event-facts">
            <div><span className="event-fact-icon"><CalendarDays aria-hidden="true" size={20} /></span><p><small>Tarikh</small><strong>12 September 2026</strong><span>12 Rabiulawal 1448H</span></p></div>
            <div><span className="event-fact-icon"><MapPin aria-hidden="true" size={20} /></span><p><small>Tempat</small><strong>Dewan Orang Ramai</strong><span>Taman Koperasi Polis Fasa 2, Kuala Lumpur</span><a className="event-map-link" href={eventWazeUrl} target="_blank" rel="noreferrer" aria-label="Buka lokasi Dewan Orang Ramai Taman Koperasi Polis Fasa 2 di Waze"><Navigation aria-hidden="true" size={16} /> Buka di Waze</a></p></div>
          </div>
        </div>
        <figure className="event-featured-poster">
          <img src="/events/perhimpunan-keluarga-2026.jpg" alt="Poster Perhimpunan Keluarga Besar Haji Shukur pada 12 September 2026" width="1280" height="719" />
          <figcaption>Poster rasmi Perhimpunan Keluarga 2026</figcaption>
        </figure>
      </section>

      <section className="schedule-section" aria-labelledby="schedule-title">
        <div className="schedule-heading">
          <p className="event-kicker">Susunan program</p>
          <h2 id="schedule-title">Atur cara majlis</h2>
          <p>Program bermula pada 10:30 pagi dan dijangka selesai pada 3:00 petang.</p>
        </div>
        <ol className="schedule-list">
          {schedule.map(([time, activity], index) => (
            <li key={time}>
              <span className="schedule-number">{String(index + 1).padStart(2, '0')}</span>
              <time><Clock3 aria-hidden="true" size={16} />{time}</time>
              <strong>{activity}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section className="event-posters" aria-labelledby="poster-title">
        <div className="schedule-heading">
          <p className="event-kicker">Rujukan keluarga</p>
          <h2 id="poster-title">Poster program</h2>
        </div>
        <div className="poster-grid">
          <figure><img src="/events/perhimpunan-keluarga-2026.jpg" alt="Poster tarikh dan lokasi Perhimpunan Keluarga 2026" width="1280" height="719" /><figcaption>Maklumat perhimpunan</figcaption></figure>
          <figure><img src="/events/atur-cara-2026.jpg" alt="Poster atur cara Majlis Keluarga Besar Haji Shukur" width="713" height="1280" /><figcaption>Atur cara majlis</figcaption></figure>
        </div>
      </section>

      <footer className="event-footer"><p>Jika ada pertanyaan atau pembetulan program, sila hubungi kami melalui WhatsApp.</p><a href={contactWhatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={18} /> Hubungi melalui WhatsApp</a></footer>
      <a className="floating-whatsapp" href={contactWhatsAppUrl} target="_blank" rel="noreferrer" title="Pertanyaan program" aria-label="Hubungi melalui WhatsApp untuk pertanyaan Program 2026"><MessageCircle aria-hidden="true" size={23} /><span>Pertanyaan program</span></a>
    </main>
  );
}
