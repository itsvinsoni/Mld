import React from 'react';
import { Icon } from '../icons';
import { useReveal } from '../hooks';
import { useTilt } from '../effects';
import { useT } from '../i18n';
import { SectionHeading } from '../SectionHeading';
import { INSTITUTIONS, type Institution } from '../data';

const InstitutionCard: React.FC<{ inst: Institution; index: number }> = ({ inst, index }) => {
  const { ref, className } = useReveal('up');
  const { ref: tiltRef, style: tiltStyle } = useTilt<HTMLDivElement>(5);
  const t = useT();
  const delay = index * 80;

  return (
    <div
      ref={(el) => { ref.current = el; tiltRef.current = el; }}
      className={`card-glow shine group bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col ${className}`}
      style={{ ...tiltStyle, transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}
    >
      {/* Photo header */}
      <a href={`/institutions/${inst.slug}`} className="relative h-44 overflow-hidden block bg-slate-100">
        <img
          src={inst.image}
          alt={inst.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-white/95 text-brand-orange-dark backdrop-blur transition-transform duration-300 group-hover:scale-105 group-hover:bg-brand-orange group-hover:text-white">
          {inst.typeLabel}
        </span>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-white/95 text-xs">
          <Icon id="map-pin" size={14} />
          {inst.location}
        </span>
        <span className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/95 text-brand-orange-dark backdrop-blur transition-all duration-300 translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-orange/40">
          <Icon id="arrow-right" size={16} />
        </span>
      </a>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <a href={`/institutions/${inst.slug}`}>
          <h3 className="font-serif font-bold text-lg leading-snug text-light-textPrimary group-hover:text-brand-orange transition-colors duration-300">
            {inst.name}
          </h3>
        </a>
        <p className="mt-2.5 text-sm text-light-textSecondary leading-relaxed flex-1">
          {inst.description}
        </p>

        {/* Actions */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
          <a
            href={`/institutions/${inst.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-300 hover:gap-2.5"
          >
            {t('insts.viewDetails', 'View Details')}
            <Icon id="arrow-right" size={12} />
          </a>
          {inst.actions.slice(0, 1).map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full bg-brand-orange-light text-brand-orange-dark hover:bg-brand-orange hover:text-white transition-all duration-300 hover:gap-2.5"
            >
              {action.label}
              <Icon id={action.external ? 'external' : 'arrow-right'} size={12} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { InstitutionCard };

const Marquee: React.FC = () => {
  const names = INSTITUTIONS.map((i) => i.name);
  const track = [...names, ...names];
  return (
    <div className="mt-16 overflow-hidden border-y border-slate-200 bg-white py-5">
      <div className="flex w-max marquee items-center gap-10">
        {track.map((name, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap">
            <Icon id="star" size={16} className="text-brand-orange" />
            <span className="font-serif font-bold text-slate-500 whitespace-nowrap">{name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export const InstitutionsSection: React.FC = () => {
  const t = useT();
  return (
    <section id="institutions" className="py-20 md:py-28 bg-[#F7F3EE]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label={t('insts.label', 'Our Institutions')}
          heading={t('insts.heading', 'Institutions Run by the Sansthan')}
          subtext={t('insts.subtext', 'From schools to colleges and vocational institutes, we run a diverse family of educational institutions committed to quality and values.')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {INSTITUTIONS.map((inst, i) => (
            <InstitutionCard key={inst.id} inst={inst} index={i} />
          ))}
        </div>

        <Marquee />
      </div>
    </section>
  );
};
