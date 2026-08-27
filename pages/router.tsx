import React, { useEffect, useState } from 'react';

/**
 * Lightweight History-API router (clean URLs, no #).
 * URLs: /, /institutions, /institutions/:slug, /about, /gallery,
 *       /messages, /contact, /admin
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

/**
 * Global interceptor: any same-origin <a href="/..."> click is handled
 * via the History API so the app does not do a full page reload.
 * External links (target=_blank / http(s)) are left untouched.
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
    navigate(href);
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
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
  return (
    <a
      href={to}
      className={`${className} ${activeClassName ?? ''}`.trim()}
      onClick={(e) => {
        onClick?.();
        // The global interceptor handles navigation; we only add custom hooks here.
      }}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
