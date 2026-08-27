import React, { useEffect, useState } from 'react';
import { Icon } from '../icons';
import { useReveal } from '../hooks';
import { SectionHeading } from '../SectionHeading';
import { MESSAGES } from '../data';

export const MessagesSection: React.FC = () => {
  const { ref, className } = useReveal('up');
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % MESSAGES.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const message = MESSAGES[active];

  return (
    <section id="messages" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* decorative */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-orange-dark/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Messages from Leadership"
          heading="Voices of Leadership"
          subtext="Guidance and vision from the leaders who shape MLD Memorial Sansthan."
          light
        />

        <div
          ref={ref}
          className={`max-w-4xl mx-auto ${className}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote card */}
          <div className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white shadow-xl">
                <Icon id="quote" size={26} />
              </span>
            </div>

            {/* key to remount for animation */}
            <div key={message.id} className="rise">
              <div className="mt-3 text-brand-orange text-xs font-bold uppercase tracking-widest">
                {message.headline}
              </div>
              <blockquote className="mt-5 font-serif text-xl md:text-2xl leading-relaxed text-white/95 italic">
                &ldquo;{message.message}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center justify-center gap-4">
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-brand-orange-light text-brand-orange-dark font-serif font-bold text-lg">
                  {message.name.charAt(0)}
                </span>
                <div className="text-left">
                  <div className="font-bold text-white">{message.name}</div>
                  <div className="text-sm text-slate-400">{message.title}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls / dots */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setActive((a) => (a - 1 + MESSAGES.length) % MESSAGES.length)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-brand-orange transition-colors"
              aria-label="Previous message"
            >
              <Icon id="chevron-left" size={20} />
            </button>

            <div className="flex items-center gap-2">
              {MESSAGES.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${m.name} message`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-brand-orange' : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((a) => (a + 1) % MESSAGES.length)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-brand-orange transition-colors"
              aria-label="Next message"
            >
              <Icon id="chevron-right" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
