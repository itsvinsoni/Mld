import React, { useEffect, useState } from 'react';
import { Icon } from '../icons';
import { useReveal } from '../hooks';
import { SectionHeading } from '../SectionHeading';
import { useMessages } from '../dataI18n';
import { useT } from '../i18n';

export const MessagesSection: React.FC = () => {
  const { ref, className } = useReveal('up');
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const messages = useMessages();
  const t = useT();

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % messages.length), 6000);
    return () => clearInterval(id);
  }, [paused, messages.length]);

  const message = messages[active];

  return (
    <section id="messages" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* decorative */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label={t('msg.label', 'Messages from Leadership')}
          heading={t('msg.heading', 'Voices of Leadership')}
          subtext={t('msg.subtext', 'Guidance and vision from the leaders who shape MLD Memorial Sansthan.')}
          light
        />

        <div
          ref={ref}
          className={`max-w-4xl mx-auto ${className}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote card */}
          <div className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden group hover:border-brand-orange/40 transition-colors duration-500">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white shadow-xl">
                <Icon id="quote" size={26} />
              </span>
            </div>
            {/* Decorative corner */}
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand-orange/20 blur-3xl float-slow" />

            {/* key to remount for animation */}
            <div key={message.id} className="rise">
              <div className="mt-3 text-brand-orange text-xs font-bold uppercase tracking-widest">
                {message.headline}
              </div>
              <blockquote className="mt-5 font-serif text-xl md:text-2xl leading-relaxed text-white/95 italic">
                &ldquo;{message.message}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center justify-center gap-4">
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white font-serif font-bold text-lg shadow-lg shadow-brand-orange/30">
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
              onClick={() => setActive((a) => (a - 1 + messages.length) % messages.length)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-brand-orange hover:scale-110 transition-all duration-300"
              aria-label="Previous message"
            >
              <Icon id="chevron-left" size={20} />
            </button>

            <div className="flex items-center gap-2">
              {messages.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${m.name} message`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === active ? 'w-10 bg-brand-orange shadow-lg shadow-brand-orange/40' : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((a) => (a + 1) % messages.length)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-brand-orange hover:scale-110 transition-all duration-300"
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
