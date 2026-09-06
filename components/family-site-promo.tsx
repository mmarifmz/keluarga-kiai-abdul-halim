import { ShoppingBag, Sparkles } from 'lucide-react';

const mariBuyProductUrl = 'https://maribuy.ws/kedai/avanteintel/produk/digitalisasi-salasilah-keluarga-lakaran-ke-minisite';

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
        <a className="family-site-promo-maribuy" href={mariBuyProductUrl} target="_blank" rel="nofollow noreferrer" aria-label="Lihat pakej minisite salasilah keluarga di MariBuy" title="Lihat pakej di MariBuy">
          <ShoppingBag aria-hidden="true" size={24} />
        </a>
      </div>
    </aside>
  );
}
