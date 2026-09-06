'use client';

import { CalendarClock } from 'lucide-react';
import { useEffect, useState } from 'react';

const eventStart = new Date('2026-09-12T10:30:00+08:00').getTime();
const eventEnd = new Date('2026-09-12T15:00:00+08:00').getTime();

type CountdownState = {
  phase: 'countdown' | 'live' | 'ended';
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getCountdown(now: number): CountdownState {
  if (now >= eventEnd) return { phase: 'ended', days: 0, hours: 0, minutes: 0, seconds: 0 };
  if (now >= eventStart) return { phase: 'live', days: 0, hours: 0, minutes: 0, seconds: 0 };

  const remaining = eventStart - now;
  return {
    phase: 'countdown',
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
  };
}

export function EventCountdown() {
  const [countdown, setCountdown] = useState<CountdownState | null>(null);

  useEffect(() => {
    const update = () => setCountdown(getCountdown(Date.now()));
    update();
    const interval = window.setInterval(update, 1_000);
    return () => window.clearInterval(interval);
  }, []);

  if (countdown?.phase === 'live') {
    return (
      <section className="event-countdown event-countdown-message" aria-live="polite">
        <CalendarClock aria-hidden="true" size={21} />
        <div><small>Hari yang dinanti sudah tiba</small><strong>Majlis sedang berlangsung</strong></div>
      </section>
    );
  }

  if (countdown?.phase === 'ended') {
    return (
      <section className="event-countdown event-countdown-message">
        <CalendarClock aria-hidden="true" size={21} />
        <div><small>Terima kasih atas kehadiran anda</small><strong>Majlis telah selesai</strong></div>
      </section>
    );
  }

  const units = [
    ['Hari', countdown?.days],
    ['Jam', countdown?.hours],
    ['Minit', countdown?.minutes],
    ['Saat', countdown?.seconds],
  ] as const;

  return (
    <section className="event-countdown" aria-labelledby="countdown-title">
      <div className="event-countdown-heading">
        <CalendarClock aria-hidden="true" size={18} />
        <span id="countdown-title">Kira detik menuju hari keluarga</span>
      </div>
      <div className="countdown-grid" role="timer" aria-label="Masa berbaki sehingga majlis bermula">
        {units.map(([label, value]) => (
          <div key={label}>
            <strong>{value === undefined ? '—' : String(value).padStart(2, '0')}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
