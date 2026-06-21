import { useEffect, useRef } from 'react';
import { useSplitType } from '../../hooks/useSplitType';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Manifesto.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  useSplitType(quoteRef, { type: 'lines,words' });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'center center',
        onEnter: () => {
          gsap.fromTo(
            '.manifesto__quote .line',
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.12 }
          );
          gsap.fromTo(
            authorRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 0.6 }
          );
          gsap.fromTo(
            '.manifesto__line',
            { scaleX: 0 },
            { scaleX: 1, duration: 1.5, ease: 'expo.out', delay: 0.3 }
          );
        },
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        animation: gsap.to('.manifesto__bg-text', {
          x: '-10%',
          ease: 'none',
        }),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="manifesto section" ref={sectionRef}>
      <div className="manifesto__bg-text" aria-hidden="true">
        MANIFESTO
      </div>

      <div className="manifesto__inner container">
        <div className="manifesto__label text-label">
          <span className="manifesto__line" />
          <span>Manifesto</span>
        </div>

        <blockquote className="manifesto__quote text-editorial" ref={quoteRef}>
          We don't serve coffee.
          <br />
          We compose moments.
        </blockquote>

        <div className="manifesto__author" ref={authorRef}>
          <span className="manifesto__author-line" />
          <div>
            <span className="manifesto__author-name">Noir Atelier</span>
            <span className="manifesto__author-title text-mono">Creative Philosophy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
