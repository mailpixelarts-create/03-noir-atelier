import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import './Footer.scss';

const MARQUEE_TEXT = 'NOIR ATELIER — INTERNATIONAL FASHION CAFÉ — WHERE COFFEE BECOMES COUTURE — ';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useScrollTrigger({
    trigger: footerRef.current,
    start: 'top 90%',
    onEnter: () => {
      gsap.fromTo(
        '.footer__logo-text',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out' }
      );
      gsap.fromTo(
        '.footer__content > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.08, delay: 0.3 }
      );
    },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.footer__marquee-track', {
        x: '-50%',
        duration: 30,
        ease: 'none',
        repeat: -1,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__marquee">
        <div className="footer__marquee-track">
          <span className="footer__marquee-text">{MARQUEE_TEXT}</span>
          <span className="footer__marquee-text">{MARQUEE_TEXT}</span>
        </div>
      </div>

      <div className="footer__content container">
        <div className="footer__logo">
          <span className="footer__logo-text text-editorial">NOIR ATELIER</span>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <span className="footer__col-title text-label">Visit</span>
            <p className="footer__col-text text-body">
              Torstraße 140
              <br />
              10119 Berlin, Germany
            </p>
            <p className="footer__col-text text-body">
              Tue — Sun, 08:00 — 22:00
            </p>
          </div>

          <div className="footer__col">
            <span className="footer__col-title text-label">Contact</span>
            <p className="footer__col-text text-body">
              hello@noiratelier.com
              <br />
              +49 30 1234 5678
            </p>
          </div>

          <div className="footer__col">
            <span className="footer__col-title text-label">Follow</span>
            <div className="footer__col-links">
              <a href="#" className="footer__col-link text-body">Instagram</a>
              <a href="#" className="footer__col-link text-body">Pinterest</a>
              <a href="#" className="footer__col-link text-body">Vimeo</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__bottom-text text-mono">
            A LOOKBOOK Studio Experience
          </span>
          <span className="footer__bottom-text text-mono">
            © Norman James
          </span>
          <span className="footer__bottom-text text-mono">
            Made with ❤️ by Empathy Studio
          </span>
        </div>
      </div>
    </footer>
  );
}
