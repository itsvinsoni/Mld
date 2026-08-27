import React from 'react';
import { Icon } from './icons';
import { useReveal } from './hooks';

interface SectionHeadingProps {
  label: string;
  heading: string;
  subtext?: string;
  light?: boolean;
  align?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  heading,
  subtext,
  light = false,
  align = 'center',
}) => {
  const { ref, className } = useReveal();
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div ref={ref} className={`flex flex-col ${alignment} max-w-3xl mb-12 md:mb-16 ${className}`}>
      <span className="section-label mb-3">
        <span className="block w-8 h-px bg-brand-orange" />
        {label}
        <span className="block w-8 h-px bg-brand-orange" />
      </span>
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-light-textPrimary'
        }`}
      >
        {heading}
      </h2>
      <span className="orange-divider mt-5" />
      {subtext && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? 'text-slate-300' : 'text-light-textSecondary'
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
};

interface FeatureChipProps {
  label: string;
  icon?: React.ComponentProps<typeof Icon>['id'];
}

export const FeatureChip: React.FC<FeatureChipProps> = ({ label, icon }) => {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-light text-brand-orange-dark text-sm font-semibold">
      {icon && <Icon id={icon} size={16} />}
      {label}
    </span>
  );
};
