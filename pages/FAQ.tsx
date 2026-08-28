import React, { useState } from 'react';
import { Icon } from './icons';

export const FAQItem: React.FC<{ q: string; a: string; open?: boolean; onToggle?: () => void }> = ({ q, a, open, onToggle }) => {
  return (
    <details
      open={open}
      onToggle={onToggle}
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden card-glow"
    >
      <summary className="flex items-start gap-3 cursor-pointer p-5 md:p-6 list-none hover:bg-brand-orange-light/30 transition-colors">
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-orange-light text-brand-orange shrink-0 group-open:bg-brand-orange group-open:text-white group-open:rotate-45 transition-all duration-300">
          <Icon id="plus" size={16} />
        </span>
        <h3 className="font-bold text-light-textPrimary text-base md:text-lg flex-1 leading-snug">{q}</h3>
      </summary>
      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[3.75rem] md:pl-[3.75rem] text-light-textSecondary leading-relaxed text-sm md:text-base">
        {a}
      </div>
    </details>
  );
};

export const FAQList: React.FC<{ faqs: { q: string; a: string }[]; heading?: string; sub?: string }> = ({ faqs, heading, sub }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        {heading && (
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label mb-3 justify-center">FAQ</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary mt-2">{heading}</h2>
            {sub && <p className="mt-3 text-light-textSecondary">{sub}</p>}
            <span className="orange-divider mx-auto mt-5" />
          </div>
        )}
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
