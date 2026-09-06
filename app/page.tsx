'use client';

import { useMemo, useState } from 'react';
import { CalendarDays, ChevronDown, Heart, Leaf, Menu, MessageCircle, Search, Sparkles, UsersRound, X } from 'lucide-react';
import { FamilySitePromo } from '@/components/family-site-promo';

type Person = { name: string; phone?: string; deceased?: boolean; spouse?: Person; children?: Person[]; note?: string };

function toWhatsAppNumber(phone: string) {
  const digits = phone.replace(/\D/g, '');
  return digits.startsWith('0') ? `60${digits.slice(1)}` : digits;
}

const contactWhatsAppUrl = `https://wa.me/601140030076?text=${encodeURIComponent('Assalamualaikum, saya ingin berkongsi pembetulan atau maklumat baharu untuk salasilah keluarga.')}`;

const yusofBranches: Person[] = [
  { name: 'Wan', deceased: true, children: [{ name: 'Safiah' }] },
  { name: 'Arpah', deceased: true },
  { name: 'Hashim', deceased: true, spouse: { name: 'Aminah' }, children: [{ name: 'Mohd. Khair Johari', deceased: true }, { name: 'Mohd. Khalil', phone: '017-2954495' }, { name: 'Masitah', phone: '+60 11-1501 2750', spouse: { name: 'Mior Zamri' }, children: [{ name: 'Mior Mohd Arif', phone: '011-40030076' }, { name: 'Mior Mohd Azam', phone: '013-3113404' }] }, { name: 'Halimatun Saadiah', phone: '012-9362853' }, { name: 'Hamidah', phone: '010-4342862' }] },
  { name: 'Zainal Abidin', deceased: true },
  { name: 'Salmah', spouse: { name: 'Md. Rejab' }, children: [{ name: 'Kamariah', phone: '019-5377866' }, { name: 'Md. Saad', phone: '010-2213001' }, { name: 'Mohd. Yusof', phone: '013-3382986' }, { name: 'Saadiah', phone: '011-64142042' }, { name: 'Mustapha', deceased: true }] },
  { name: 'Jamaliah', deceased: true },
  { name: 'Che Gayah', spouse: { name: 'Shaik Mohamed' }, children: [{ name: 'Shaik Malek', phone: '016-4542203' }, { name: 'Shaik Ismail', deceased: true }, { name: 'Shaik Shukor', phone: '011-67697553' }, { name: 'Salina', phone: '017-4799228' }, { name: 'Rabiani', phone: '013-4893888' }] },
  { name: 'Ahmad', deceased: true },
  { name: 'Zahrah', spouse: { name: 'Aizudin' }, children: [{ name: 'Rosnah', phone: '016-2960974' }, { name: 'Rosly', phone: '012-9703974' }, { name: 'Rafidah', phone: '018-3813838' }, { name: 'Jamilah', phone: '011-29539152' }] },
  { name: 'Din', deceased: true },
  { name: 'Zainab' },
];

const branches: Person[] = [
  { name: 'Hj. Ahmad', spouse: { name: 'Aishah' }, children: [{ name: 'Kamsinah' }, { name: 'Hj. Mukri' }, { name: 'Subari' }, { name: 'Hj. Rashid' }, { name: 'Hj. Deraman' }, { name: 'Juriah' }, { name: 'Saniah' }, { name: 'Milah' }] },
  { name: 'Hj. Yusof bin Hj. Shukur', spouse: { name: 'Teh binti Saad' }, children: yusofBranches },
  { name: 'Hj. Husin', spouse: { name: 'Khatijah' }, children: [{ name: 'Abdul Hamid' }, { name: 'Hj. Abdul Rahman' }, { name: 'Abdul Majid' }, { name: 'Yahaya' }, { name: 'Abdul Latif' }, { name: 'Salim' }, { name: 'Mohammad' }] },
  { name: 'Hj. Abdul Ghani', spouse: { name: 'Hjh. Rafeah' }, children: [{ name: 'Hasmah' }, { name: 'Halimah' }, { name: 'Umi Kalthum' }, { name: 'Ahmad Maulana' }, { name: 'Ahmad Kamaruddin' }] },
  { name: 'Hj. Markum', spouse: { name: 'Muhammad Hasanah' }, children: [{ name: 'Azizah' }, { name: "Robe'ah" }, { name: 'Jamilah' }, { name: 'Hafsah' }] },
  { name: 'Mak Teh Sanah', spouse: { name: 'Hj. Hassan' }, children: [{ name: 'Kak Besar' }, { name: 'Jamaliah' }, { name: 'Hj. Abd Majid' }, { name: 'Fatimah' }, { name: 'Saadiah' }, { name: 'Abdul Rahman' }] },
  { name: 'Mersinah', spouse: { name: 'Saji bin Hassan' }, children: [{ name: 'Ismail' }, { name: 'Sulaiman' }, { name: 'Ishak' }, { name: 'Mustafa Ramdhan' }, { name: 'Rosimah' }] },
  { name: 'Hjh. Mariyah', spouse: { name: 'Hj. Kasri' }, children: [{ name: 'Satariah' }, { name: 'Saadiah' }, { name: 'Maimunah' }, { name: 'Muslim' }, { name: 'Suhaimi' }, { name: 'Rokiah' }, { name: 'Arshad' }], note: 'Turut dicatat dalam rekod asal: lain-lain satu bapa.' },
];

function personMatches(person: Person, query: string): boolean {
  const term = query.toLocaleLowerCase('ms');
  return person.name.toLocaleLowerCase('ms').includes(term) || (person.spouse ? personMatches(person.spouse, query) : false) || person.children?.some((child) => personMatches(child, query)) === true;
}

function PersonName({ person, prominent = false }: { person: Person; prominent?: boolean }) {
  return <div className="person-line"><span className={prominent ? 'person-name prominent' : 'person-name'}>{person.name}</span>{person.deceased && <span className="deceased-pill">Almarhum/ah</span>}</div>;
}

function Descendant({ person, depth = 0 }: { person: Person; depth?: number }) {
  return (
    <li className="descendant" style={{ '--depth': depth } as React.CSSProperties}>
      <div className="descendant-row">
        <div className="descendant-main">
          <PersonName person={person} />
          {person.spouse && <div className="spouse-line"><Heart aria-hidden="true" size={13} /><span>{person.spouse.name}</span></div>}
          {person.note && <p className="family-note">{person.note}</p>}
        </div>
        {person.phone && <a className="phone-link" href={`https://wa.me/${toWhatsAppNumber(person.phone)}`} target="_blank" rel="nofollow noreferrer" title={`WhatsApp ${person.name}`} aria-label={`Hubungi ${person.name} melalui WhatsApp`}><MessageCircle aria-hidden="true" size={18} /></a>}
      </div>
      {person.children && <ul className="descendant-list nested">{person.children.map((child) => <Descendant key={child.name} person={child} depth={depth + 1} />)}</ul>}
    </li>
  );
}

function BranchCard({ person, index, forceOpen }: { person: Person; index: number; forceOpen: boolean }) {
  const [open, setOpen] = useState(true);
  const isOpen = forceOpen || open;
  const hasDetails = Boolean(person.children?.length || person.phone);
  return (
    <article className={`branch-card ${isOpen ? 'is-open' : ''}`}>
      <button className="branch-heading" type="button" onClick={() => hasDetails && setOpen((value) => !value)} aria-expanded={isOpen} disabled={!hasDetails}>
        <span className="branch-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <span className="branch-title">
          <PersonName person={person} prominent />
          {person.spouse && <span className="branch-spouse"><Heart aria-hidden="true" size={13} /><span>{person.spouse.name}</span></span>}
          <span className="branch-meta">{person.children?.length ? `${person.children.length} nama dalam rekod` : 'Rekod keluarga'}</span>
        </span>
        {hasDetails && <ChevronDown className="chevron" aria-hidden="true" size={20} />}
      </button>
      {isOpen && person.children && <div className="branch-content"><ul className="descendant-list">{person.children.map((child) => <Descendant key={child.name} person={child} />)}</ul>{person.note && <p className="branch-note">{person.note}</p>}</div>}
    </article>
  );
}

function OrgBranch({ person, index }: { person: Person; index: number }) {
  return (
    <article className="org-branch">
      <div className="org-branch-head">
        <span className="org-index">{String(index + 1).padStart(2, '0')}</span>
        <strong>{person.name}</strong>
        {person.spouse && <span><Heart aria-hidden="true" size={12} />{person.spouse.name}</span>}
      </div>
      <ul>{person.children?.map((child) => <li key={child.name}>{child.name}</li>)}</ul>
      {person.note && <p>{person.note}</p>}
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredBranches = useMemo(() => branches.map((person, index) => ({ person, index })).filter(({ person }) => !query.trim() || personMatches(person, query.trim())), [query]);
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ke bahagian atas"><span className="brand-mark"><Leaf aria-hidden="true" size={19} /></span><span>Salasilah Keluarga Kiai Hj. Abdul Halim</span></a>
        <nav id="site-menu" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navigasi utama">
          <a href="#top" onClick={() => setMenuOpen(false)}>Utama</a>
          <a href="/program-2026" onClick={() => setMenuOpen(false)}><CalendarDays aria-hidden="true" size={14} /> Program 2026</a>
          <a href="#carta" onClick={() => setMenuOpen(false)}>Carta Keluarga</a>
          <a href="#keluarga" onClick={() => setMenuOpen(false)}>Senarai Keluarga</a>
          <a className="nav-contact" href={contactWhatsAppUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Hubungi</a>
        </nav>
        <div className="header-detail"><UsersRound aria-hidden="true" size={17} /><span>99 ahli · 6 generasi</span></div>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="site-menu" aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}>{menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}</button>
      </header>

      <section className="heritage-hero" id="top">
        <div className="hero-ornament" aria-hidden="true"><Sparkles size={22} /></div>
        <p className="eyebrow">Warisan keluarga</p>
        <h1>Kiai Hj. Abdul Halim</h1>
        <p className="hero-copy">Menyusuri nama, kasih dan hubungan yang menyatukan enam generasi.</p>
        <div className="ancestor-path" aria-label="Garis keturunan utama">
          <div className="ancestor-card founder"><span className="generation-label">Generasi pertama</span><strong>Kiai Hj. Abdul Halim</strong><span className="founder-detail">Radin Kasumo Sastro Amijoyo <small>Gelaran asal Jawa</small></span><span className="founder-origin">Kampung Demak, Semarang, Jawa Tengah</span></div>
          <div className="line-drop" aria-hidden="true" />
          <div className="ancestor-card couple">
            <div><span className="generation-label">Generasi kedua</span><strong>Hj. Shukur bin Hj. Abdul Halim</strong></div><span className="heart-medallion" aria-hidden="true"><Heart size={16} /></span><div><span className="generation-label">Isteri</span><strong>Hjh. Mariam bt. Abdul Rahman</strong></div>
          </div>
        </div>
      </section>

      <section className="org-section" id="carta" aria-labelledby="org-title">
        <div className="org-intro">
          <div><p className="eyebrow">Pandangan keseluruhan</p><h2 id="org-title">Carta organisasi keluarga</h2></div>
          <p>Leret ke kiri atau kanan untuk melihat semua lapan cabang keluarga.</p>
        </div>
        <div className="org-scroll" tabIndex={0} role="region" aria-label="Carta organisasi lapan cabang keluarga Hj. Shukur">
          <div className="org-canvas">
            <div className="org-parent founder-node"><span>Generasi pertama</span><strong>Kiai Hj. Abdul Halim</strong><small>Radin Kasumo Sastro Amijoyo</small><small>Kampung Demak, Semarang, Jawa Tengah</small></div>
            <div className="org-drop" aria-hidden="true" />
            <div className="org-parent couple-node"><span>Generasi kedua</span><strong>Hj. Shukur bin Hj. Abdul Halim</strong><small><Heart aria-hidden="true" size={12} /> Hjh. Mariam bt. Abdul Rahman</small></div>
            <div className="org-tree-line" aria-hidden="true" />
            <div className="org-branches">{branches.map((person, index) => <OrgBranch key={person.name} person={person} index={index} />)}</div>
          </div>
        </div>
      </section>

      <section className="family-section" id="keluarga" aria-labelledby="family-title">
        <div className="section-intro">
          <div><p className="eyebrow">Keturunan Hj. Shukur &amp; Hjh. Mariam</p><h2 id="family-title">Lapan cabang utama</h2><p className="section-copy">Termasuk sebelas cabang keluarga Hj. Yusof dan Teh yang telah direkodkan sebelum ini.</p></div>
          <label className="search-box"><Search aria-hidden="true" size={19} /><span className="sr-only">Cari ahli keluarga</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama…" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Kosongkan carian"><X aria-hidden="true" size={17} /></button>}</label>
        </div>
        {filteredBranches.length ? <div className="branch-grid">{filteredBranches.map(({ person, index }) => <BranchCard key={person.name} person={person} index={index} forceOpen={Boolean(query.trim())} />)}</div> : <div className="empty-state"><Search aria-hidden="true" size={24} /><h3>Tiada nama ditemui</h3><p>Cuba ejaan atau nombor telefon yang lain.</p><button type="button" onClick={() => setQuery('')}>Lihat semua keluarga</button></div>}
        <div className="legend"><span><span className="legend-dot" /> Garis keturunan</span><span><Heart aria-hidden="true" size={14} /> Pasangan</span><span><span className="mini-pill">Almarhum/ah</span> Telah meninggal dunia</span></div>
      </section>
      <FamilySitePromo />
      <footer><Leaf aria-hidden="true" size={17} /><p>Dipelihara sebagai kenangan untuk generasi hari ini dan akan datang.</p></footer>
      <a className="floating-whatsapp" href={contactWhatsAppUrl} target="_blank" rel="noreferrer" title="Kemas kini keluarga" aria-label="Hubungi Mior Mohd Arif melalui WhatsApp untuk kemas kini keluarga"><MessageCircle aria-hidden="true" size={23} /><span>Kemas kini keluarga</span></a>
    </main>
  );
}
