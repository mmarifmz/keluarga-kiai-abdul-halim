import type { Metadata } from 'next';
import { ArrowLeft, CalendarDays, CalendarPlus, ChevronDown, Clock3, Leaf, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { EventCountdown } from './countdown';

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
    images: [{ url: '/events/program-2026-1200x630-v2.png', width: 1200, height: 630, type: 'image/png', alt: 'Poster rasmi Perhimpunan Keluarga Besar Haji Shukur 2026 — lihat program dan lokasi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Program Perhimpunan Keluarga 2026',
    description: 'Perhimpunan Keluarga Besar Haji Shukur pada 12 September 2026.',
    images: ['/events/program-2026-1200x630-v2.png'],
  },
};

const contactWhatsAppUrl = `https://wa.me/601140030076?text=${encodeURIComponent('Assalamualaikum, saya ingin bertanya mengenai Program Perhimpunan Keluarga 2026.')}`;
const eventLocation = 'Dewan Orang Ramai Taman Koperasi Polis Fasa 2, Kuala Lumpur';
const eventWazeUrl = `https://www.waze.com/ul?q=${encodeURIComponent(eventLocation)}&navigate=yes`;
const eventTitle = 'Majlis Keluarga Besar Haji Shukur';
const eventDetails = 'Perhimpunan keluarga untuk bertahlil, berkenalan, menikmati jamuan dan mengeratkan silaturrahim. Maklumat lanjut: https://keluarga-kiai-abdul-halim.arif.my/program-2026';
const eventGoogleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=20260912T023000Z%2F20260912T070000Z&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}&ctz=Asia%2FKuala_Lumpur`;
const eventOutlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?rru=addevent&subject=${encodeURIComponent(eventTitle)}&startdt=${encodeURIComponent('2026-09-12T10:30:00+08:00')}&enddt=${encodeURIComponent('2026-09-12T15:00:00+08:00')}&body=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;

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
          <EventCountdown />
          <div className="event-facts">
            <div><span className="event-fact-icon"><CalendarDays aria-hidden="true" size={20} /></span><p><small>Tarikh</small><strong>12 September 2026</strong><span>30 Rabiulawal 1448H</span><a className="event-hijri-source" href="https://www.e-solat.gov.my/index.php?siteId=24&pageId=26" target="_blank" rel="noreferrer">Rujukan: Portal e-Solat JAKIM</a></p></div>
            <div><span className="event-fact-icon"><MapPin aria-hidden="true" size={20} /></span><p><small>Tempat</small><strong>Dewan Orang Ramai</strong><span>Taman Koperasi Polis Fasa 2, Kuala Lumpur</span><a className="event-map-link" href={eventWazeUrl} target="_blank" rel="noreferrer" aria-label="Buka lokasi Dewan Orang Ramai Taman Koperasi Polis Fasa 2 di Waze"><Navigation aria-hidden="true" size={16} /> Buka di Waze</a></p></div>
          </div>
          <details className="calendar-menu">
            <summary><CalendarPlus aria-hidden="true" size={18} /> Simpan ke kalendar <ChevronDown aria-hidden="true" size={17} /></summary>
            <div className="calendar-options">
              <a href={eventGoogleCalendarUrl} target="_blank" rel="noreferrer"><strong>Google Calendar</strong><span>Buka dan simpan terus</span></a>
              <a href="/events/perhimpunan-keluarga-2026.ics"><strong>Apple / iPhone / iPad</strong><span>Serasi juga dengan aplikasi kalendar lain</span></a>
              <a href={eventOutlookCalendarUrl} target="_blank" rel="noreferrer"><strong>Outlook.com</strong><span>Buka acara dalam Outlook</span></a>
            </div>
          </details>
        </div>
        <figure className="event-featured-poster">
          <img src="/events/perhimpunan-keluarga-2026-v2.png" alt="Poster Perhimpunan Keluarga Besar Haji Shukur pada 12 September 2026 bersamaan 30 Rabiulawal 1448H" width="1680" height="936" />
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
          <figure><img src="/events/perhimpunan-keluarga-2026-v2.png" alt="Poster tarikh dan lokasi Perhimpunan Keluarga 2026" width="1680" height="936" /><figcaption>Maklumat perhimpunan</figcaption></figure>
          <figure><img src="/events/atur-cara-2026.jpg" alt="Poster atur cara Majlis Keluarga Besar Haji Shukur" width="713" height="1280" /><figcaption>Atur cara majlis</figcaption></figure>
        </div>
      </section>

      <footer className="event-footer"><p>Jika ada pertanyaan atau pembetulan program, sila hubungi kami melalui WhatsApp.</p><a href={contactWhatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={18} /> Hubungi melalui WhatsApp</a></footer>
      <a className="floating-whatsapp" href={contactWhatsAppUrl} target="_blank" rel="noreferrer" title="Pertanyaan program" aria-label="Hubungi melalui WhatsApp untuk pertanyaan Program 2026"><MessageCircle aria-hidden="true" size={23} /><span>Pertanyaan program</span></a>
    </main>
  );
}
