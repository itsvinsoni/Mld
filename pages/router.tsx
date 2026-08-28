import React, { useEffect, useState, useRef } from 'react';

/**
 * Lightweight History-API router (clean URLs, no #).
 * URLs: /, /institutions, /institutions/:slug, /about, /gallery,
 *       /messages, /contact, /admin
 * Plus: prefetch on hover (Claude-style snappy nav).
 */

const ROUTE_EVENT = 'mld:routechange';

const readPath = (): string => {
  let p = window.location.pathname || '/';
  if (p.length > 1 && p.endsWith('/')) p = p.replace(/\/+$/, '');
  return p;
};

export function useRoute(): string {
  const [route, setRoute] = useState<string>(readPath);

  useEffect(() => {
    const onChange = () => setRoute(readPath());
    window.addEventListener('popstate', onChange);
    window.addEventListener(ROUTE_EVENT, onChange);
    return () => {
      window.removeEventListener('popstate', onChange);
      window.removeEventListener(ROUTE_EVENT, onChange);
    };
  }, []);

  return route;
}

export function getSegments(route: string): string[] {
  return route.split('/').filter(Boolean);
}

export function navigate(path: string, replace = false): void {
  if (path !== readPath()) {
    if (replace) window.history.replaceState({}, '', path);
    else window.history.pushState({}, '', path);
    window.dispatchEvent(new Event(ROUTE_EVENT));
  }
}

/* ===================== Page chunk preload ===================== */
type PageModule = () => Promise<{ default: React.ComponentType<any> }>;
const PAGE_LOADERS: Record<string, PageModule> = {
  '/': () => import('./HomePage').then(m => ({ default: m.HomePage })),
  '/about': () => import('./AboutPage').then(m => ({ default: m.AboutPage })),
  '/institutions': () => import('./InstitutionsPage').then(m => ({ default: m.InstitutionsPage })),
  '/gallery': () => import('./GalleryPage').then(m => ({ default: m.GalleryPage })),
  '/messages': () => import('./MessagesPage').then(m => ({ default: m.MessagesPage })),
  '/contact': () => import('./ContactPage').then(m => ({ default: m.ContactPage })),
};
const INST_DETAIL = () => import('./InstitutionDetailPage').then(m => ({ default: m.InstitutionDetailPage }));
const PROG_DETAIL = () => import('./ProgramDetailPage').then(m => ({ default: m.ProgramDetailPage }));
const NOT_FOUND = () => import('./NotFoundPage').then(m => ({ default: m.NotFoundPage }));

/** Map a path to its loader (handles dynamic /institutions/:slug, /courses/:slug). */
function getLoaderForPath(path: string): PageModule | null {
  const clean = path.split('?')[0].replace(/\/+$/, '') || '/';
  if (PAGE_LOADERS[clean]) return PAGE_LOADERS[clean];
  if (clean === '/admin' || clean.startsWith('/admin')) return null;
  if (clean.startsWith('/institutions/') && clean.length > '/institutions/'.length) return INST_DETAIL;
  if (clean.startsWith('/courses/') && clean.length > '/courses/'.length) return PROG_DETAIL;
  if (clean === '/404') return NOT_FOUND;
  // Unknown path → still prefetch the 404 chunk to be ready
  return NOT_FOUND;
}

const prefetched = new Set<string>();
/** Prefetch a page chunk. Idempotent. */
export function prefetch(path: string): void {
  if (prefetched.has(path)) return;
  const loader = getLoaderForPath(path);
  if (!loader) return;
  prefetched.add(path);
  // Fire and forget — the browser will cache the chunk
  loader().catch(() => {
    // If prefetch fails, allow retry
    prefetched.delete(path);
  });
}

/** Hook: prefetch on hover/touch. Returns event handlers to spread on <a> elements. */
export function usePrefetchHandlers(path: string) {
  const done = useRef(false);
  const trigger = () => {
    if (done.current) return;
    done.current = true;
    prefetch(path);
  };
  return {
    onMouseEnter: trigger,
    onFocus: trigger,
    onTouchStart: trigger,
  };
}

/**
 * Global interceptor: any same-origin <a href="/..."> click is handled
 * via the History API so the app does not do a full page reload.
 * Also: prefetches the target chunk on hover/touch for snappy nav.
 */
export function installLinkInterceptor(): () => void {
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
      return;
    const target = (e.target as HTMLElement | null)?.closest?.('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href || !href.startsWith('/') || target.getAttribute('target') === '_blank') return;
    e.preventDefault();
    // Click counts as a strong intent — prefetch first (no-op if already)
    prefetch(href);
    navigate(href);
  };
  document.addEventListener('click', onClick);

  // Global prefetch on hover/touch (debounced via 80ms)
  let lastHoverPath = '';
  let lastHoverTimer: number | undefined;
  const onOver = (e: MouseEvent) => {
    const target = (e.target as HTMLElement | null)?.closest?.('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href || !href.startsWith('/')) return;
    if (href === lastHoverPath) return;
    lastHoverPath = href;
    if (lastHoverTimer) window.clearTimeout(lastHoverTimer);
    lastHoverTimer = window.setTimeout(() => prefetch(href), 80);
  };
  document.addEventListener('mouseover', onOver, { passive: true });
  document.addEventListener('touchstart', onOver, { passive: true });

  return () => {
    document.removeEventListener('click', onClick);
    document.removeEventListener('mouseover', onOver);
    document.removeEventListener('touchstart', onOver);
    if (lastHoverTimer) window.clearTimeout(lastHoverTimer);
  };
}

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  activeClassName?: string;
  ariaLabel?: string;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = '',
  onClick,
  activeClassName,
  ariaLabel,
}) => {
  const pre = usePrefetchHandlers(to);
  return (
    <a
      href={to}
      className={`${className} ${activeClassName ?? ''}`.trim()}
      onClick={(e) => {
        onClick?.();
        prefetch(to);
        // The global interceptor handles navigation; we only add custom hooks here.
      }}
      onMouseEnter={pre.onMouseEnter}
      onFocus={pre.onFocus}
      onTouchStart={pre.onTouchStart}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
