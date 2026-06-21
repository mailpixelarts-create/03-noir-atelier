import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Navigation.scss';

const NAV_LINKS = [
  { label: 'Collection', href: '#collection' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Film', href: '#film' },
  { label: 'Studio', href: '#studio' },
  { label: 'Journal', href: '#journal' },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3.4, ease: 'expo.out' }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav__inner">
        <a href="/" className="nav__logo">
          <span className="nav__logo-text">NOIR</span>
          <span className="nav__logo-dot" />
          <span className="nav__logo-text nav__logo-text--light">ATELIER</span>
        </a>

        <div className="nav__links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`nav__burger ${isOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="nav__burger-line" />
          <span className="nav__burger-line" />
        </button>
      </div>

      <div className={`nav__menu ${isOpen ? 'is-open' : ''}`}>
        <div className="nav__menu-inner">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="nav__menu-link"
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${i * 0.08}s` : '0s' }}
            >
              <span className="nav__menu-link-index">0{i + 1}</span>
              <span className="nav__menu-link-text">{link.label}</span>
            </a>
          ))}
        </div>
        <div className="nav__menu-footer">
          <span className="nav__menu-footer-text">International Fashion Café</span>
          <span className="nav__menu-footer-text">Est. 2026</span>
        </div>
      </div>
    </nav>
  );
}
