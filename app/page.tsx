'use client';

import { useMemo, useState } from 'react';
import { ChevronDown, Heart, Leaf, Phone, Search, Sparkles, UsersRound, X } from 'lucide-react';

type Person = { name: string; phone?: string; deceased?: boolean; spouse?: Person; children?: Person[] };

const branches: Person[] = [
  { name: 'Wan', deceased: true, children: [{ name: 'Safiah' }] },
  { name: 'Arpah', deceased: true },
  { name: 'Zainal Abidin', deceased: true, children: [{ name: 'Hashim', spouse: { name: 'Aminah' }, children: [{ name: 'Mohd. Khair Johari', deceased: true }, { name: 'Mohd. Khalil', phone: '017-2954495' }, { name: 'Masitah', phone: '011-18012750' }, { name: 'Halimatun Saadiah', phone: '012-9362853' }, { name: 'Hamidah', phone: '010-4342862' }] }] },
  { name: 'Jamaliah', deceased: true, children: [{ name: 'Salmah', spouse: { name: 'Md. Rejab' }, children: [{ name: 'Kamariah', phone: '019-5377866' }, { name: 'Md. Saad', phone: '010-2213001' }, { name: 'Mohd. Yusof', phone: '013-3382986' }, { name: 'Saadiah', phone: '011-64142042' }, { name: 'Mustapha', deceased: true }] }] },
  { name: 'Ahmad', deceased: true, children: [{ name: 'Che Gayah', spouse: { name: 'Shaik Mohamed' }, children: [{ name: 'Shaik Malek', phone: '016-4542203' }, { name: 'Shaik Ismail', deceased: true }, { name: 'Shaik Shukor', phone: '011-67697553' }, { name: 'Salina', phone: '017-4799228' }, { name: 'Rabiani', phone: '013-4893888' }] }] },
  { name: 'Din', deceased: true },
  { name: 'Zahrah', spouse: { name: 'Aizudin' }, children: [{ name: 'Rosnah', phone: '016-2960974' }, { name: 'Rosly', phone: '012-9703974' }, { name: 'Rafidah', phone: '018-3813838' }, { name: 'Jamilah', phone: '011-29539152' }] },
  { name: 'Zainab' },
];

function personMatches(person: Person, query: string): boolean {
  const term = query.toLocaleLowerCase('ms');
  return person.name.toLocaleLowerCase('ms').includes(term) || person.phone?.includes(term) === true || (person.spouse ? personMatches(person.spouse, query) : false) || person.children?.some((child) => personMatches(child, query)) === true;
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
        </div>
        {person.phone && <a className="phone-link" href={`tel:${person.phone.replaceAll('-', '')}`} aria-label={`Telefon ${person.name} di ${person.phone}`}><Phone aria-hidden="true" size={15} /><span>{person.phone}</span></a>}
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
        <span className="branch-title"><PersonName person={person} prominent /><span className="branch-meta">{person.children?.length ? 'Lihat keturunan' : 'Rekod keluarga'}</span></span>
        {hasDetails && <ChevronDown className="chevron" aria-hidden="true" size={20} />}
      </button>
      {isOpen && person.children && <div className="branch-content"><ul className="descendant-list">{person.children.map((child) => <Descendant key={child.name} person={child} />)}</ul></div>}
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState('');
  const filteredBranches = useMemo(() => branches.map((person, index) => ({ person, index })).filter(({ person }) => !query.trim() || personMatches(person, query.trim())), [query]);
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ke bahagian atas"><span className="brand-mark"><Leaf aria-hidden="true" size={19} /></span><span>Salasilah Keluarga</span></a>
        <div className="header-detail"><UsersRound aria-hidden="true" size={17} /><span>40 ahli · 6 generasi</span></div>
      </header>

      <section className="heritage-hero" id="top">
        <div className="hero-ornament" aria-hidden="true"><Sparkles size={22} /></div>
        <p className="eyebrow">Warisan keluarga</p>
        <h1>Kiai Hj. Abdul Halim</h1>
        <p className="hero-copy">Menyusuri nama, kasih dan hubungan yang menyatukan enam generasi.</p>
        <div className="ancestor-path" aria-label="Garis keturunan utama">
          <div className="ancestor-card founder"><span className="generation-label">Generasi pertama</span><strong>Kiai Hj. Abdul Halim</strong></div>
          <div className="line-drop" aria-hidden="true" />
          <div className="ancestor-card couple">
            <div><span className="generation-label">Generasi kedua</span><strong>Hj. Shukur bin Halim</strong></div><span className="heart-medallion" aria-hidden="true"><Heart size={16} /></span><div><span className="generation-label">Isteri</span><strong>Hjh. Mariam bt. Abd. Rahman</strong></div>
          </div>
          <div className="line-drop" aria-hidden="true" />
          <div className="ancestor-card couple focal">
            <div><span className="generation-label">Generasi ketiga</span><strong>Hj. Yusof bin Hj. Shukur</strong></div><span className="heart-medallion" aria-hidden="true"><Heart size={16} /></span><div><span className="generation-label">Isteri</span><strong>Teh binti Saad</strong></div>
          </div>
        </div>
      </section>

      <section className="family-section" aria-labelledby="family-title">
        <div className="section-intro">
          <div><p className="eyebrow">Keturunan Hj. Yusof &amp; Teh</p><h2 id="family-title">Lapan cabang keluarga</h2></div>
          <label className="search-box"><Search aria-hidden="true" size={19} /><span className="sr-only">Cari ahli keluarga atau nombor telefon</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama atau telefon…" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Kosongkan carian"><X aria-hidden="true" size={17} /></button>}</label>
        </div>
        {filteredBranches.length ? <div className="branch-grid">{filteredBranches.map(({ person, index }) => <BranchCard key={person.name} person={person} index={index} forceOpen={Boolean(query.trim())} />)}</div> : <div className="empty-state"><Search aria-hidden="true" size={24} /><h3>Tiada nama ditemui</h3><p>Cuba ejaan atau nombor telefon yang lain.</p><button type="button" onClick={() => setQuery('')}>Lihat semua keluarga</button></div>}
        <div className="legend"><span><span className="legend-dot" /> Garis keturunan</span><span><Heart aria-hidden="true" size={14} /> Pasangan</span><span><span className="mini-pill">Almarhum/ah</span> Telah meninggal dunia</span></div>
      </section>
      <footer><Leaf aria-hidden="true" size={17} /><p>Dipelihara sebagai kenangan untuk generasi hari ini dan akan datang.</p></footer>
    </main>
  );
}
