'use client';

import { ZoomIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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
  return (
    <figure className={figureClassName}>
      <Dialog>
        <DialogTrigger
          render={
            <button
              type="button"
              className="poster-zoom-trigger"
              aria-label={`Besarkan ${caption.toLowerCase()}`}
            />
          }
        >
          <img src={src} alt={alt} width={width} height={height} />
          <span className="poster-zoom-hint"><ZoomIn aria-hidden="true" size={17} /> Klik untuk besarkan</span>
        </DialogTrigger>
        <DialogContent className="poster-lightbox-content">
          <DialogTitle className="sr-only">{caption}</DialogTitle>
          <DialogDescription className="sr-only">Paparan besar poster. Tekan Escape atau butang tutup untuk kembali.</DialogDescription>
          <img src={src} alt={alt} width={width} height={height} />
          <p>{caption}</p>
        </DialogContent>
      </Dialog>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
