import React from 'react';

/* ===================== Page Skeleton (initial route load) ===================== */
export const PageSkeleton: React.FC<{ label?: string }> = ({ label = 'Loading page' }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 pt-32" role="status" aria-live="polite" aria-label={label}>
    <div className="relative">
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center text-white font-serif font-bold text-2xl shadow-2xl shadow-brand-orange/40 pulse-glow">
        M
      </div>
      <div className="absolute -inset-2 rounded-3xl border-2 border-brand-orange/30 ring-spin" />
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm font-semibold text-light-textSecondary tracking-wide">{label}</div>
      <div className="w-32 h-1 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full w-1/2 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full shimmer" />
      </div>
    </div>
  </div>
);

/* ===================== Hero Skeleton (for instant first paint) ===================== */
export const HeroSkeleton: React.FC = () => (
  <section className="relative min-h-[100svh] bg-slate-900 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 skeleton" />
    <div className="absolute inset-0 bg-slate-900/60" />
    <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full pt-32 pb-24">
      <div className="max-w-3xl space-y-5">
        <div className="skeleton h-8 w-48 rounded-full" />
        <div className="skeleton h-14 md:h-20 w-3/4 rounded-2xl" />
        <div className="skeleton h-14 md:h-20 w-1/2 rounded-2xl" />
        <div className="skeleton h-5 w-full max-w-xl rounded mt-6" />
        <div className="skeleton h-5 w-5/6 max-w-lg rounded" />
        <div className="flex gap-3 mt-8">
          <div className="skeleton h-12 w-44 rounded-full" />
          <div className="skeleton h-12 w-36 rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

/* ===================== Card Skeleton (grid items) ===================== */
export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="skeleton h-44 w-full" />
        <div className="p-5 space-y-3">
          <div className="skeleton h-5 w-3/4 rounded" />
          <div className="skeleton h-3 w-full rounded" />
          <div className="skeleton h-3 w-5/6 rounded" />
          <div className="flex gap-2 mt-4">
            <div className="skeleton h-7 w-20 rounded-full" />
            <div className="skeleton h-7 w-20 rounded-full" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

/* ===================== Stats Skeleton ===================== */
export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" aria-hidden="true">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="bg-white rounded-3xl border border-slate-100 p-6 text-center">
        <div className="skeleton h-14 w-14 rounded-2xl mx-auto mb-4" />
        <div className="skeleton h-10 w-24 rounded mx-auto" />
        <div className="skeleton h-3 w-20 rounded mx-auto mt-2" />
      </div>
    ))}
  </div>
);

/* ===================== Gallery Skeleton ===================== */
export const GallerySkeleton: React.FC<{ count?: number }> = ({ count = 8 }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="skeleton rounded-2xl w-full h-full" />
    ))}
  </div>
);

/* ===================== Text Skeleton (for paragraphs) ===================== */
export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-2" aria-hidden="true">
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className="skeleton h-4 rounded" style={{ width: `${85 + Math.random() * 15}%` }} />
    ))}
  </div>
);

/* ===================== LazyMount (mount only when in viewport) ===================== */
import { useInView } from './hooks';
export const LazyMount: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  minHeight?: number;
  className?: string;
}> = ({ children, fallback, rootMargin = '300px 0px', minHeight = 320, className = '' }) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0, rootMargin });
  return (
    <div ref={ref} className={className} style={{ minHeight: inView ? undefined : minHeight }}>
      {inView ? children : (fallback || <div className="w-full h-full" />)}
    </div>
  );
};
