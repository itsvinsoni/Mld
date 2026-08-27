import { useEffect, useRef, useState } from 'react';

/** Observes an element and reports whether it has entered the viewport. */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
  },
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for very old browsers / reduced environments.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

/** Animates a number from 0 to `target` when `start` becomes true. */
export function useCountUp(target: number, duration = 1800, start = true) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    let raf = 0;
    const t0 = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

/** Adds the .reveal + .reveal-visible classes when in view. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  direction: 'up' | 'left' | 'right' = 'up',
) {
  const { ref, inView } = useInView<T>({
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
  });

  const dirClass =
    direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : '';

  const className = `reveal ${dirClass} ${inView ? 'reveal-visible' : ''}`.trim();

  return { ref, className };
}
