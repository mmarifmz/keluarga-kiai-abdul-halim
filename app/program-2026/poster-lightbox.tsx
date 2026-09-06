'use client';

import { X, ZoomIn } from 'lucide-react';
import { useRef } from 'react';

type PosterLightboxProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  figureClassName?: string;
};

export function PosterLightbox({
  src,
  alt,
  caption,
  width,
  height,
  figureClassName,
}: PosterLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <figure className={figureClassName}>
      <button
        type="button"
        className="poster-zoom-trigger"
        aria-label={`Besarkan ${caption.toLowerCase()}`}
        onClick={openDialog}
      >
        <img src={src} alt={alt} width={width} height={height} />
        <span className="poster-zoom-hint"><ZoomIn aria-hidden="true" size={17} /> Klik untuk besarkan</span>
      </button>
      <dialog
        ref={dialogRef}
        className="poster-lightbox-dialog"
        aria-label={caption}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <div className="poster-lightbox-content">
          <button type="button" className="poster-lightbox-close" onClick={closeDialog} aria-label="Tutup paparan besar poster"><X aria-hidden="true" size={22} /></button>
          <img src={src} alt={alt} width={width} height={height} />
          <p>{caption}</p>
        </div>
      </dialog>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
