import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type Lang = 'en' | 'hi';

const STORAGE_KEY = 'mld-lang';

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<Ctx | null>(null);

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'hi' || v === 'en') return v;
  } catch {}
  // fallback: browser preference
  try {
    const nav = navigator.language || '';
    if (nav.toLowerCase().startsWith('hi')) return 'hi';
  } catch {}
  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.body.classList.toggle('lang-hi', lang === 'hi');
    document.body.classList.toggle('lang-en', lang === 'en');
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((p) => (p === 'en' ? 'hi' : 'en')), []);

  // Translation function: looks up key in translations; if missing, returns fallback or key
  const t = useCallback((key: string, fallback?: string): string => {
    const val = resolveKey(key, lang);
    if (val != null) return val;
    if (lang !== 'en') {
      const en = resolveKey(key, 'en');
      if (en != null) return en;
    }
    return fallback ?? key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}

export function useT() {
  return useLang().t;
}

// Internal resolver — defined in translations.ts; placeholder here to avoid circular.
// We attach it from translations module.
let _resolver: ((key: string, lang: Lang) => string | null) | null = null;
export function __setResolver(fn: (key: string, lang: Lang) => string | null) { _resolver = fn; }
function resolveKey(key: string, lang: Lang): string | null {
  if (!_resolver) return null;
  return _resolver(key, lang);
}
