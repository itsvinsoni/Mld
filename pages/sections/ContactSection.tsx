import React, { useState } from 'react';
import { Icon } from '../icons';
import { useReveal } from '../hooks';
import { SITE, HERO } from '../data';

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-light-textPrimary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition';

export const ContactSection: React.FC = () => {
  const { ref, className } = useReveal('up');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-light-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* CTA banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white p-8 md:p-14 mb-16">
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute right-20 bottom-0 h-28 w-28 rounded-full bg-white/10 blur-xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-white/90 text-xs font-bold uppercase tracking-widest">
                <Icon id="sparkles" size={16} />
                Admission & Careers
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold leading-tight">
                Begin your journey with MLD Memorial Sansthan
              </h2>
              <p className="mt-3 text-white/90 max-w-md">
                {HERO.notice}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-orange font-bold hover:bg-brand-orange-light transition-colors"
                >
                  Admission Enquiry
                  <Icon id="arrow-right" size={18} />
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Job%20Application`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white font-bold hover:bg-white/25 transition-colors"
                >
                  Apply for Job
                  <Icon id="external" size={18} />
                </a>
              </div>
            </div>

            {/* Contact quick card */}
            <div className="bg-white/10 rounded-2xl p-5 space-y-3">
              {[
                { icon: 'map-pin' as const, text: SITE.location },
                { icon: 'phone' as const, text: SITE.phone },
                { icon: 'mail' as const, text: SITE.email },
              ].map((item) => (
                <div key={item.icon} className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/15 text-white">
                    <Icon id={item.icon} size={20} />
                  </span>
                  <span className="text-white/95 text-sm md:text-base font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enquiry form */}
        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${className}`}>
          <div>
            <span className="section-label mb-3">Contact Us</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
              We'd love to hear from you
            </h2>
            <span className="orange-divider mt-5" />
            <p className="mt-5 text-light-textSecondary text-base md:text-lg leading-relaxed max-w-md">
              Have a question about admissions, courses, or careers? Send us a message and our team
              will get back to you shortly.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: 'map-pin' as const, title: 'Visit Us', sub: SITE.location },
                { icon: 'phone' as const, title: 'Call Us', sub: SITE.phone },
                { icon: 'mail' as const, title: 'Email Us', sub: SITE.email },
                { icon: 'clock' as const, title: 'Office Hours', sub: 'Mon – Sat, 9 AM – 5 PM' },
              ].map((c) => (
                <div key={c.title} className="bg-white rounded-2xl border border-slate-100 p-5 card-glow">
                  <span className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-brand-orange-light text-brand-orange mb-3">
                    <Icon id={c.icon} size={20} />
                  </span>
                  <div className="font-bold text-light-textPrimary">{c.title}</div>
                  <div className="mt-1 text-sm text-light-textSecondary">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-xl">
            {submitted ? (
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center">
                <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-orange-light text-brand-orange mb-4">
                  <Icon id="check" size={32} />
                </span>
                <h3 className="font-serif text-2xl font-bold text-light-textPrimary">Thank you!</h3>
                <p className="mt-2 text-light-textSecondary">Your message has been received. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-light-textPrimary mb-2">Send an Enquiry</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-light-textPrimary mb-1.5">Full Name</label>
                    <input type="text" required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-light-textPrimary mb-1.5">Phone</label>
                    <input type="tel" required placeholder="Your phone number" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-light-textPrimary mb-1.5">Email</label>
                  <input type="email" required placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-light-textPrimary mb-1.5">I'm interested in</label>
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option>Admission Enquiry</option>
                    <option>Job Application</option>
                    <option>General Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-light-textPrimary mb-1.5">Message</label>
                  <textarea rows={4} required placeholder="Write your message..." className={inputClass} />
                </div>
                <button type="submit" className="btn-orange w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base">
                  Send Message
                  <Icon id="arrow-right" size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
