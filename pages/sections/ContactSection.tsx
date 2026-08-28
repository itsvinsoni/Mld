import React, { useState } from 'react';
import { Icon } from '../icons';
import { useReveal, useInView } from '../hooks';
import { SITE, HERO } from '../data';
import { useT } from '../i18n';

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-light-textPrimary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange hover:border-slate-300 transition-all duration-300';

export const ContactSection: React.FC = () => {
  const { ref, className } = useReveal('up');
  const [submitted, setSubmitted] = useState(false);
  const t = useT();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#F7F3EE] overflow-hidden">
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none float-slow gpu" />
      <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-amber-400/8 blur-3xl pointer-events-none float-lg gpu" />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* CTA banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white p-8 md:p-14 mb-16 shadow-2xl shadow-brand-orange/20">
          {/* Animated background */}
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10 blur-2xl float-slow" />
          <div className="absolute right-20 bottom-0 h-28 w-28 rounded-full bg-white/10 blur-xl float-lg" />
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-white/95 text-xs font-bold uppercase tracking-widest">
                <Icon id="sparkles" size={16} />
                {t('contactCta.eyebrow', 'Admission & Careers')}
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold leading-tight">
                {t('contactCta.heading2', 'Begin your journey with MLD Memorial Sansthan')}
              </h2>
              <p className="mt-3 text-white/90 max-w-md">
                {t('contactCta.notice', HERO.notice)}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-orange font-bold hover:bg-brand-orange-light hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('contactCta.admission', 'Admission Enquiry')}
                  <Icon id="arrow-right" size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Job%20Application`}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white font-bold hover:bg-white/25 hover:scale-105 transition-all duration-300"
                >
                  {t('contactCta.job', 'Apply for Job')}
                  <Icon id="external" size={18} className="transition-transform group-hover:rotate-12" />
                </a>
              </div>
            </div>

            {/* Contact quick card */}
            <div className="bg-white/10 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
              {[
                { icon: 'map-pin' as const, text: SITE.location },
                { icon: 'phone' as const, text: SITE.phone },
                { icon: 'mail' as const, text: SITE.email },
              ].map((item, i) => (
                <div key={item.icon} className="flex items-center gap-3 group hover:translate-x-1 transition-transform" style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/15 text-white group-hover:bg-white group-hover:text-brand-orange transition-colors">
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
            <span className="section-label mb-3">{t('contactPage.label', 'Contact Us')}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
              {t('contactPage.heading', "We'd love to hear from you")}
            </h2>
            <span className="orange-divider mt-5" />
            <p className="mt-5 text-light-textSecondary text-base md:text-lg leading-relaxed max-w-md">
              {t('contactPage.sub', 'Have a question about admissions, courses, or careers? Send us a message and our team will get back to you shortly.')}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: 'map-pin' as const, title: t('contactPage.visit', 'Visit Us'), sub: t('brand.location', SITE.location) },
                { icon: 'phone' as const, title: t('contactPage.phone', 'Call Us'), sub: SITE.phone },
                { icon: 'mail' as const, title: t('contactPage.email', 'Email Us'), sub: SITE.email },
                { icon: 'clock' as const, title: t('contactPage.hours', 'Office Hours'), sub: t('contactPage.hoursVal', 'Mon – Sat, 9 AM – 5 PM') },
              ].map((c, i) => (
                <div key={c.title} className="bg-white rounded-2xl border border-slate-100 p-5 card-glow group" style={{ animationDelay: `${i * 80}ms` }}>
                  <span className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-brand-orange-light text-brand-orange mb-3 group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon id={c.icon} size={20} />
                  </span>
                  <div className="font-bold text-light-textPrimary group-hover:text-brand-orange transition-colors">{c.title}</div>
                  <div className="mt-1 text-sm text-light-textSecondary">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-xl card-glow">
            {submitted ? (
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center scale-in">
                <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-orange text-white mb-4 shadow-lg shadow-brand-orange/40 pulse-glow">
                  <Icon id="check" size={32} />
                </span>
                <h3 className="font-serif text-2xl font-bold text-light-textPrimary">{t('contactPage.form.thanks', 'Thank you!')}</h3>
                <p className="mt-2 text-light-textSecondary">{t('contactPage.form.thanksSub', "Your message has been received. We'll be in touch soon.")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-light-textPrimary mb-2">{t('contactPage.form.sendEnquiry', 'Send an Enquiry')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rise-sm" style={{ animationDelay: '0ms' }}>
                    <label className="block text-sm font-medium text-light-textPrimary mb-1.5">{t('contactPage.form.name', 'Full Name')}</label>
                    <input type="text" required placeholder={t('contactPage.form.namePh', 'Your name')} className={inputClass} />
                  </div>
                  <div className="rise-sm" style={{ animationDelay: '80ms' }}>
                    <label className="block text-sm font-medium text-light-textPrimary mb-1.5">{t('contactPage.form.phone', 'Phone')}</label>
                    <input type="tel" required placeholder={t('contactPage.form.phonePh', 'Your phone number')} className={inputClass} />
                  </div>
                </div>
                <div className="rise-sm" style={{ animationDelay: '160ms' }}>
                  <label className="block text-sm font-medium text-light-textPrimary mb-1.5">{t('contactPage.form.email', 'Email')}</label>
                  <input type="email" required placeholder="you@example.com" className={inputClass} />
                </div>
                <div className="rise-sm" style={{ animationDelay: '240ms' }}>
                  <label className="block text-sm font-medium text-light-textPrimary mb-1.5">{t('contactPage.form.interested', "I'm interested in")}</label>
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>{t('contactPage.form.select', 'Select an option')}</option>
                    <option>{t('contactPage.form.optAdmission', 'Admission Enquiry')}</option>
                    <option>{t('contactPage.form.optJob', 'Job Application')}</option>
                    <option>{t('contactPage.form.optGeneral', 'General Question')}</option>
                    <option>{t('contactPage.form.optOther', 'Other')}</option>
                  </select>
                </div>
                <div className="rise-sm" style={{ animationDelay: '320ms' }}>
                  <label className="block text-sm font-medium text-light-textPrimary mb-1.5">{t('contactPage.form.message', 'Message')}</label>
                  <textarea rows={4} required placeholder={t('contactPage.form.messagePh', 'Write your message...')} className={inputClass} />
                </div>
                <button type="submit" className="btn-orange w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base rise-sm" style={{ animationDelay: '400ms' }}>
                  {t('contactPage.form.send', 'Send Message')}
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
