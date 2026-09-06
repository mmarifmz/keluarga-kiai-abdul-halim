import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

const avanteWhatsAppUrl = `https://wa.me/601111055559?text=${encodeURIComponent(
  'Assalamualaikum Avante Intelligence, saya berminat dengan minisite salasilah keluarga serendah RM49.',
)}`;

export function FamilySitePromo() {
  return (
    <aside className="family-site-promo" aria-labelledby="family-site-promo-title">
      <div className="family-site-promo-copy">
        <span className="family-site-promo-icon" aria-hidden="true"><Sparkles size={22} /></span>
        <div>
          <p>Minisite salasilah keluarga</p>
          <h2 id="family-site-promo-title">Inginkan salasilah keluarga seperti ini?</h2>
          <span>Abadikan sejarah keluarga dalam minisite yang kemas, mudah dikongsi dan mesra telefon.</span>
        </div>
      </div>
      <div className="family-site-promo-action">
        <div className="family-site-promo-price"><small>Serendah</small><strong>RM49</strong></div>
        <a href={avanteWhatsAppUrl} target="_blank" rel="noreferrer" aria-label="Hubungi Avante Intelligence melalui WhatsApp di 011-1105 5559">
          <MessageCircle aria-hidden="true" size={19} />
          <span><small>Avante Intelligence</small>011-1105 5559</span>
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </div>
    </aside>
  );
}
