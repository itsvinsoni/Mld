// Inline SVG icon set for the public pages.
// Colours are controlled via `currentColor`.

import React from 'react';

export type LucideId =
  | 'home'
  | 'building'
  | 'school'
  | 'graduation'
  | 'book'
  | 'flask'
  | 'capsule'
  | 'globe'
  | 'users'
  | 'quote'
  | 'phone'
  | 'mail'
  | 'map-pin'
  | 'clock'
  | 'arrow-right'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'menu'
  | 'close'
  | 'external'
  | 'check'
  | 'star'
  | 'plus'
  | 'award'
  | 'heart'
  | 'landmark'
  | 'lightbulb'
  | 'crown'
  | 'sparkles'
  | 'astronaut'
  | 'bus'
  | 'tractor'
  | 'briefcase';

interface IconProps {
  id: LucideId;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

// Base path data using stroke-linecap/linejoin round; 24x24 viewBox.
const paths: Record<LucideId, React.ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M3 21h18" />
    </>
  ),
  school: (
    <>
      <path d="M3 21h18" />
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </>
  ),
  graduation: (
    <>
      <path d="M2 9.5 12 5l10 4.5L12 14 2 9.5Z" />
      <path d="M6 11.5V16c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8v-4.5" />
      <path d="M22 9.5v5" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2Z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6L5.5 18a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  capsule: (
    <>
      <path d="M8.5 3.5a5 5 0 0 0 7 7L10 16a5 5 0 1 1-7-7l5.5-5.5Z" />
      <path d="M14 7.5a5 5 0 0 0-7.4 6.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15.5 14.5a5 5 0 0 1 5.5 5.5" />
    </>
  ),
  quote: (
    <>
      <path d="M7 7h4v4c0 3-1.5 4.6-4 5" />
      <path d="M15 7h4v4c0 3-1.5 4.6-4 5" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l2 4-2.5 1.5a11 11 0 0 0 6 6L16 13l4 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  'arrow-right': <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  'chevron-left': <><path d="m15 6-6 6 6 6" /></>,
  'chevron-right': <><path d="m9 6 6 6-6 6" /></>,
  'chevron-down': <><path d="m6 9 6 6 6-6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M6 6l12 12M18 6 6 18" /></>,
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
      <path d="M20 14v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
    </>
  ),
  check: <><path d="M4 12l5 5L20 6" /></>,
  star: <><path d="m12 3 2.6 5.5 6 .8-4.4 4.2 1.1 6L12 16.7 6.7 19.5l1.1-6L3.4 9.3l6-.8L12 3Z" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13-1.5 8 5-3 5 3-1.5-8" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5-7 9-7 9Z" />
    </>
  ),
  landmark: (
    <>
      <path d="M4 21h16M5 10h14M6 10v11M10 10v11M14 10v11M18 10v11" />
      <path d="M3 7h18L12 3 3 7Z" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6M10 22h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.6l.2 1.5h4.6l.2-1.5c.1-.6.5-1.2 1-1.6A6 6 0 0 0 12 3Z" />
    </>
  ),
  crown: (
    <>
      <path d="M3 7l4 4 5-7 5 7 4-4-2 13H5L3 7Z" />
      <path d="M5 20h14" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 4l1.5 4.5L18 10l-4.5 1.5L12 16l-1.5-4.5L6 10l4.5-1.5L12 4Z" />
      <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />
    </>
  ),
  astronaut: (
    <>
      <circle cx="12" cy="11" r="4" />
      <path d="M12 7V4M7 9H4M20 9h-3" />
      <path d="M5 20c1.5-2.5 4-4 7-4s5.5 1.5 7 4" />
    </>
  ),
  bus: (
    <>
      <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M3 11h18M8 17v2M16 17v2" />
      <circle cx="7.5" cy="14" r="0.6" fill="currentColor" />
      <circle cx="16.5" cy="14" r="0.6" fill="currentColor" />
    </>
  ),
  tractor: (
    <>
      <circle cx="7" cy="17" r="3.5" />
      <path d="M7 13.5V7h6v10M13 10h4l2 3.5V17H13" />
      <circle cx="17" cy="17" r="2.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="8" width="18" height="11" rx="2" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),
};

export const Icon: React.FC<IconProps> = ({
  id,
  className = '',
  size = 24,
  strokeWidth = 2,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[id]}
    </svg>
  );
};
