import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Cursor.scss';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const steamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        opacity: 1,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    const onClick = () => {
      gsap.fromTo(
        cursor,
        { scale: 1 },
        { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1, ease: 'power2.out' }
      );
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('click', onClick);

    // Hover detection for interactive elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [data-cursor-hover]');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('is-hover');
        });
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('is-hover');
        });
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('click', onClick);
      observer.disconnect();
    };
  }, []);

  // Steam particles
  useEffect(() => {
    const container = steamRef.current;
    if (!container) return;

    const createSteam = () => {
      const particle = document.createElement('div');
      particle.className = 'cursor__steam-particle';
      container.appendChild(particle);

      gsap.fromTo(
        particle,
        {
          x: 0,
          y: 0,
          opacity: 0.6,
          scale: 0.5,
        },
        {
          y: -60 - Math.random() * 40,
          x: (Math.random() - 0.5) * 30,
          opacity: 0,
          scale: 1 + Math.random(),
          duration: 1 + Math.random() * 0.5,
          ease: 'power1.out',
          onComplete: () => particle.remove(),
        }
      );
    };

    const interval = setInterval(createSteam, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}>
        <div className="cursor__dot" />
        <div className="cursor__ring" />
        <div className="cursor__steam" ref={steamRef} />
      </div>
    </>
  );
}
