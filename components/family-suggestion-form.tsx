'use client';

import { FormEvent, useRef } from 'react';
import { MessageCircle, Plus, Send, X } from 'lucide-react';

const updateWhatsAppNumber = '601140030076';

const familyBranchGroups = [
  { label: 'Cabang utama', options: ['Hj. Ahmad', 'Hj. Yusof bin Hj. Shukur', 'Hj. Husin', 'Hj. Abdul Ghani', 'Hj. Markum', 'Mak Teh Sanah', 'Mersinah', 'Hjh. Mariyah'] },
  { label: 'Subcabang Hj. Yusof', options: ['Wan', 'Arpah', 'Hashim', 'Zainal Abidin', 'Salmah', 'Jamaliah', 'Che Gayah', 'Ahmad', 'Zahrah', 'Din', 'Zainab'] },
];

export function FamilySuggestionForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function submitSuggestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      'Assalamualaikum, saya ingin mencadangkan kemas kini salasilah keluarga.',
      '',
      `Nama saya: ${data.get('name')}`,
      `Nombor telefon: ${data.get('phone')}`,
      `Cabang keluarga: ${data.get('branch')}`,
    ].join('\n');

    window.open(`https://wa.me/${updateWhatsAppNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    form.reset();
    closeDialog();
  }

  return (
    <>
      <button className="floating-suggestion" type="button" onClick={() => dialogRef.current?.showModal()} title="Hantar cadangan" aria-label="Buka borang cadangan salasilah keluarga">
        <Plus aria-hidden="true" size={25} />
      </button>
      <dialog ref={dialogRef} className="suggestion-dialog" aria-labelledby="suggestion-title" onClick={(event) => event.target === event.currentTarget && closeDialog()}>
        <div className="suggestion-dialog-card">
          <button className="suggestion-close" type="button" onClick={closeDialog} aria-label="Tutup borang cadangan"><X aria-hidden="true" size={20} /></button>
          <div className="suggestion-heading">
            <span aria-hidden="true"><MessageCircle size={21} /></span>
            <div><p>Maklumat keluarga</p><h2 id="suggestion-title">Hantar cadangan</h2></div>
          </div>
          <p className="suggestion-intro">Isi maklumat ringkas ini untuk menyediakan mesej WhatsApp kepada pentadbir salasilah.</p>
          <form className="suggestion-form" onSubmit={submitSuggestion}>
            <label><span>Nama saya</span><input name="name" type="text" autoComplete="name" required placeholder="Masukkan nama" /></label>
            <label><span>Nombor telefon</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="Contoh: 01X-XXXXXXX" /></label>
            <label><span>Cabang keluarga</span><select name="branch" required defaultValue=""><option value="" disabled>Pilih cabang keluarga</option>{familyBranchGroups.map((group) => <optgroup key={group.label} label={group.label}>{group.options.map((option) => <option key={option} value={group.label === 'Subcabang Hj. Yusof' ? `Hj. Yusof / ${option}` : option}>{group.label === 'Subcabang Hj. Yusof' ? `Hj. Yusof › ${option}` : option}</option>)}</optgroup>)}</select></label>
            <p className="suggestion-privacy">Maklumat ini tidak disimpan dalam laman. Ia hanya dimasukkan ke dalam mesej WhatsApp anda.</p>
            <button className="suggestion-submit" type="submit"><Send aria-hidden="true" size={18} /> Teruskan ke WhatsApp</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
