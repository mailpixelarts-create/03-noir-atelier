import { useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import './RunwayFilm.scss';

export default function RunwayFilm() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useScrollTrigger({
    trigger: sectionRef.current,
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo(
        '.film__title .line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1 }
      );
      gsap.fromTo(
        '.film__meta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 0.4 }
      );
    },
  });

  useScrollTrigger({
    trigger: sectionRef.current,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    animation: gsap.to(videoRef.current, {
      scale: 1.05,
      ease: 'none',
    }),
  });

  return (
    <section className="film section" id="film" ref={sectionRef}>
      <div className="film__pinned">
        <div className="film__video" ref={videoRef}>
          <div className="film__video-placeholder">
            <div className="film__video-overlay" />
            <div className="film__video-grain" />
          </div>
          <button className="film__play" aria-label="Play film">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polygon points="8,5 19,12 8,19" fill="currentColor" />
            </svg>
          </button>
        </div>

        <div className="film__content container">
          <div className="film__label text-label">
            <span className="film__label-line" />
            <span>Film</span>
          </div>

          <h2 className="film__title text-editorial">
            <span className="line">The</span>
            <span className="line">Runway</span>
          </h2>

          <div className="film__meta">
            <div className="film__meta-item">
              <span className="text-mono">Duration</span>
              <span className="text-body">04:32</span>
            </div>
            <div className="film__meta-item">
              <span className="text-mono">Season</span>
              <span className="text-body">SS26</span>
            </div>
            <div className="film__meta-item">
              <span className="text-mono">Director</span>
              <span className="text-body">Atelier Noir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
