import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import { useSplitType } from '../../hooks/useSplitType';
import './Hero.scss';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useSplitType(titleRef, { type: 'lines' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.4 });

      tl.fromTo(
        '.hero__bg',
        { scale: 1.2 },
        { scale: 1, duration: 2, ease: 'expo.out' }
      )
        .fromTo(
          '.hero__title .line',
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.15 },
          0.2
        )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'expo.out' },
          0.8
        )
        .fromTo(
          metaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' },
          1.2
        )
        .fromTo(
          '.hero__scroll',
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: 'expo.out' },
          1.6
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useScrollTrigger({
    trigger: sectionRef.current,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    animation: gsap.to('.hero__bg', {
      y: '20%',
      scale: 1.1,
      ease: 'none',
    }),
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!bgRef.current) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.height / 2) / rect.height;

    gsap.to(bgRef.current, {
      x: x * 30,
      y: y * 30,
      duration: 1.2,
      ease: 'power2.out',
    });
  };

  return (
    <section className="hero section" ref={sectionRef} onMouseMove={handleMouseMove}>
      <div className="hero__bg" ref={bgRef}>
        <div className="hero__bg-gradient" />
        <div className="hero__bg-image" />
      </div>

      <div className="hero__content container">
        <div className="hero__meta" ref={metaRef}>
          <span className="text-mono">001 — Campaign SS26</span>
          <span className="hero__meta-divider" />
          <span className="text-mono">International Fashion Café</span>
        </div>

        <h1 className="hero__title text-editorial" ref={titleRef}>
          NOIR
          <br />
          ATELIER
        </h1>

        <div className="hero__subtitle" ref={subtitleRef}>
          <p className="text-body">Where coffee becomes couture.</p>
        </div>

        <div className="hero__scroll">
          <span className="hero__scroll-text text-label">Scroll to explore</span>
          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}
