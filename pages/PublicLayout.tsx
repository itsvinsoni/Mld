import React, { useEffect, useState } from 'react';
import { Icon } from './icons';
import { NAV_LINKS, SITE, INSTITUTIONS } from './data';
import { useRoute, getSegments } from './router';
import { ScrollProgress } from './effects';
import { useLang, useT } from './i18n';

const LangToggle: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { lang, setLang } = useLang();
  const isEn = lang === 'en';
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5 shadow-sm select-none ${
        compact ? 'text-xs' : 'text-sm'
      }`}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={isEn}
        className={`px-2.5 py-1 rounded-full font-bold transition-all duration-300 ${
          isEn
            ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
            : 'text-slate-500 hover:text-slate-800'
        }`}
        title="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('hi')}
        aria-pressed={!isEn}
        className={`px-2.5 py-1 rounded-full font-bold transition-all duration-300 font-hindi ${
          !isEn
            ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
            : 'text-slate-500 hover:text-slate-800'
        }`}
        title="हिन्दी"
      >
        हिं
      </button>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const route = useRoute();
  const segments = getSegments(route);
  const currentPath = '/' + segments.join('/');
  const t = useT();
  const { lang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath === href || currentPath.startsWith(href + '/');
  };

  const navLabel = (href: string, fallback: string) => {
    if (href === '/') return t('nav.home', fallback);
    if (href === '/institutions') return t('nav.institutions', fallback);
    if (href === '/about') return t('nav.about', fallback);
    if (href === '/gallery') return t('nav.gallery', fallback);
    if (href === '/messages') return t('nav.messages', fallback);
    if (href === '/contact') return t('nav.contact', fallback);
    return fallback;
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-white text-light-textPrimary border-b border-slate-100 shadow-sm"
    >
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src={SITE.logo}
              alt="MLD logo"
              className="h-10 w-10 md:h-11 md:w-11 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
            />
            <span className="leading-tight">
              <span className={`block font-serif font-bold text-base md:text-lg transition-colors group-hover:text-brand-orange ${lang === 'hi' ? 'font-hindiSerif' : ''}`}>
                {t('brand.name', 'MLD Memorial Sansthan')}
              </span>
              <span className="block text-[10px] md:text-[11px] tracking-widest uppercase opacity-70">
                {t('brand.shortLoc', 'Kekri · Rajasthan')}
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium tracking-wide transition-colors hover:text-brand-orange ${
                  isActive(link.href) ? 'nav-active text-brand-orange' : ''
                }`}
              >
                {navLabel(link.href, link.label)}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LangToggle />
            <a
              href="/admin"
              className="btn-orange magnetic inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm"
            >
              {t('nav.login', 'Login')}
              <Icon id="arrow-right" size={16} />
            </a>
          </div>

          {/* Mobile hamburger + lang */}
          <div className="lg:hidden flex items-center gap-2">
            <LangToggle compact />
            <button
              className="inline-flex items-center justify-center h-11 w-11 rounded-xl text-current"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? t('nav.close', 'Close menu') : t('nav.menu', 'Open menu')}
              aria-expanded={menuOpen}
            >
              <Icon id={menuOpen ? 'close' : 'menu'} size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — clean white, no orange backgrounds on items */}
      {menuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-16 md:top-20 bg-white text-light-textPrimary shadow-2xl border-t border-slate-100">
          <div className="px-5 py-4 flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-base font-medium border-b border-slate-100 transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-orange'
                    : 'text-light-textPrimary hover:text-brand-orange'
                }`}
              >
                {navLabel(link.href, link.label)}
              </a>
            ))}
            <a
              href="/admin"
              onClick={() => setMenuOpen(false)}
              className="btn-orange mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-base"
            >
              {t('nav.login', 'Login')}
              <Icon id="arrow-right" size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const t = useT();
  const { lang } = useLang();
  const labelOf = (href: string, fallback: string) => {
    if (href === '/') return t('nav.home', fallback);
    if (href === '/institutions') return t('nav.institutions', fallback);
    if (href === '/about') return t('nav.about', fallback);
    if (href === '/gallery') return t('nav.gallery', fallback);
    if (href === '/messages') return t('nav.messages', fallback);
    if (href === '/contact') return t('nav.contact', fallback);
    return fallback;
  };
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <img src={SITE.logo} alt="MLD logo" className="h-11 w-11 rounded-xl" />
              <span className={`font-serif font-bold text-white text-lg ${lang === 'hi' ? 'font-hindiSerif' : ''}`}>
                {t('brand.name', 'MLD Memorial Sansthan')}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {t('footer.tagline', SITE.tagline)}
            </p>
            <div className="flex gap-3 mt-6">
              {(['globe', 'mail', 'phone'] as const).map((icon) => (
                <a
                  key={icon}
                  href="/contact"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-slate-800 hover:bg-brand-orange transition-all duration-300 text-white hover:scale-110 hover:shadow-lg hover:shadow-brand-orange/40"
                  aria-label={icon}
                >
                  <Icon id={icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t('footer.quickLinks', 'Quick Links')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-orange transition-colors">
                    {labelOf(link.href, link.label)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/admin"
                  className="text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors"
                >
                  {t('nav.adminLogin', 'Admin Login')}
                </a>
              </li>
            </ul>
          </div>

          {/* Institutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t('footer.ourInsts', 'Our Institutions')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {INSTITUTIONS.slice(0, 6).map((inst) => (
                <li key={inst.id}>
                  <a
                    href={`/institutions/${inst.slug}`}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {inst.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t('footer.contactInfo', 'Contact Info')}
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-3">
                <Icon id="map-pin" size={18} className="text-brand-orange shrink-0" />
                <span>{t('brand.location', SITE.location)}</span>
              </li>
              <li className="flex gap-3">
                <Icon id="phone" size={18} className="text-brand-orange shrink-0" />
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-brand-orange">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon id="mail" size={18} className="text-brand-orange shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-brand-orange break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {t('footer.copyright', 'All Rights Reserved.')}
          </p>
          <p>
            {t('footer.crafted', 'Crafted with')} <span className="text-brand-orange">♥</span> {t('footer.craftedBy', 'Academic Hub')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const route = useRoute();
  const segments = getSegments(route);

  // Scroll to top on route change (except when navigating to a new page).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [segments.join('/')]);

  return (
    <div className="min-h-screen bg-[#F7F3EE] text-light-textPrimary font-sans overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main key={segments.join('/') || 'home'} className="page-in">{children}</main>
      <Footer />
    </div>
  );
};
