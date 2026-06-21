import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loader.scss';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.classList.remove('loading');
        onComplete();
      },
    });

    document.body.classList.add('loading');

    tl.set(overlayRef.current, { clipPath: 'inset(0 0 0 0)' })
      .fromTo(
        textRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' },
        0.2
      )
      .fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 2.4, ease: 'expo.inOut' },
        0.4
      )
      .to(textRef.current, {
        y: -60,
        opacity: 0,
        duration: 0.6,
        ease: 'expo.in',
      }, 2.8)
      .to(overlayRef.current, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.8,
        ease: 'expo.inOut',
      }, 3.0);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader__overlay" ref={overlayRef}>
        <div className="loader__grain" />
        <div className="loader__content">
          <div className="loader__text" ref={textRef}>
            <span className="loader__label">NOIR ATELIER</span>
            <span className="loader__sub">International Fashion Café</span>
          </div>
          <div className="loader__progress-track">
            <div className="loader__progress-bar" ref={progressRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
