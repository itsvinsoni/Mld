import React from 'react';
import { Icon } from '../icons';
import { useReveal } from '../hooks';
import { SectionHeading } from '../SectionHeading';
import { INSTITUTIONS, type Institution } from '../data';

const typeColors: Record<Institution['type'], string> = {
  school: 'bg-brand-orange-light text-brand-orange-dark',
  college: 'bg-amber-100 text-amber-700',
  pharmacy: 'bg-rose-100 text-rose-700',
  diploma: 'bg-emerald-100 text-emerald-700',
  teacher: 'bg-sky-100 text-sky-700',
};

const InstitutionCard: React.FC<{ inst: Institution; index: number }> = ({ inst, index }) => {
  const { ref, className } = useReveal('up');
  const delay = index * 70;

  return (
    <div
      ref={ref}
      className={`card-glow group bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <a href={`/institutions/${inst.slug}`} className="relative h-44 overflow-hidden block">
        <img
          src={inst.image}
          alt={inst.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${typeColors[inst.type]}`}>
          {inst.typeLabel}
        </span>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-white/90 text-xs">
          <Icon id="map-pin" size={14} />
          {inst.location}
        </span>
      </a>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <a href={`/institutions/${inst.slug}`}>
          <h3 className="font-serif font-bold text-lg leading-snug text-light-textPrimary hover:text-brand-orange transition-colors">
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            View Details
            <Icon id="arrow-right" size={12} />
          </a>
          {inst.actions.slice(0, 1).map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full bg-brand-orange-light text-brand-orange-dark hover:bg-brand-orange hover:text-white transition-colors"
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
  return (
    <section id="institutions" className="py-20 md:py-28 bg-light-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Our Institutions"
          heading="Institutions Run by the Sansthan"
          subtext="From schools to colleges and vocational institutes, we run a diverse family of educational institutions committed to quality and values."
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
