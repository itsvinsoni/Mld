import React, { useCallback, useEffect, useState } from 'react';
import { Icon } from '../icons';
import { useReveal } from '../hooks';
import { SectionHeading } from '../SectionHeading';
import { GALLERY, type GalleryImage } from '../data';

export const Lightbox: React.FC<{
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}> = ({ images, index, onClose, onPrev, onNext }) => {
  const image = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur lightbox-backdrop p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-brand-orange transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <Icon id="close" size={22} />
      </button>

      <button
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-brand-orange transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        <Icon id="chevron-left" size={24} />
      </button>

      <figure className="max-w-4xl w-full lightbox-image" onClick={(e) => e.stopPropagation()}>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl"
        />
        <figcaption className="mt-4 text-center text-white/90 text-base md:text-lg">
          {image.caption}
          <span className="ml-3 text-white/50 text-sm">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>

      <button
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-brand-orange transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        <Icon id="chevron-right" size={24} />
      </button>
    </div>
  );
};

const GalleryItem: React.FC<{ img: GalleryImage; index: number; onClick: () => void }> = ({
  img,
  index,
  onClick,
}) => {
  const { ref, className } = useReveal('up');
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`gallery-img shine group relative rounded-2xl overflow-hidden aspect-[4/3] card-glow border border-slate-100 bg-slate-100 ${className}`}
      style={{ transitionDelay: `${index * 60}ms` }}
      aria-label={`View ${img.caption}`}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = 'none';
        }}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/80 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <span className="text-white/95 text-sm font-medium text-left leading-tight">
          {img.caption}
        </span>
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-orange text-white shrink-0">
          <Icon id="plus" size={16} />
        </span>
      </div>
    </button>
  );
};

export const GallerySection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % GALLERY.length)),
    [],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)),
    [],
  );

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F7F3EE]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Photo Gallery"
          heading="Life at MLD Memorial Sansthan"
          subtext="Explore moments from our campuses, classrooms, laboratories, and celebrations."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY.map((img, i) => (
            <GalleryItem key={img.id} img={img} index={i} onClick={() => setOpenIndex(i)} />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={GALLERY}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
};
