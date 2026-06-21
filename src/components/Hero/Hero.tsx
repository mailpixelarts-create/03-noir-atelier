import { useEffect, useRef } from 'react';
import { createHeroAnimation, createHeroParallax } from '../../animations/hero';
import './Hero.scss';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      createHeroAnimation();
      createHeroParallax();
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__editorial">
        <div className="hero__grid">
          <div className="hero__grid-line hero__grid-line--v1" />
          <div className="hero__grid-line hero__grid-line--v2" />
          <div className="hero__grid-line hero__grid-line--h1" />
          <div className="hero__grid-line hero__grid-line--h2" />
        </div>

        <div className="hero__silhouette">
          <svg viewBox="0 0 300 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 50 Q160 80 155 120 Q150 160 145 200 Q140 240 135 280 Q130 320 140 360 Q150 400 160 440 Q170 480 150 490" 
                  className="hero__silhouette-path" />
            <circle cx="150" cy="40" r="25" className="hero__silhouette-head" />
          </svg>
        </div>

        <div className="hero__camera-flash" />
      </div>

      <div className="hero__noise" />
      <div className="hero__grain" />

      <div className="hero__content">
        <div className="hero__issue">
          <span className="hero__issue-number">001</span>
          <span className="hero__issue-divider">—</span>
          <span className="hero__issue-season">SS26</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--1">NOIR</span>
          <span className="hero__title-line hero__title-line--2">ATELIER</span>
        </h1>

        <div className="hero__tagline">
          <div className="hero__tagline-line" />
          <span>Where Coffee Becomes Couture</span>
          <div className="hero__tagline-line" />
        </div>

        <p className="hero__subtitle">
          An editorial fashion café. Every guest becomes part of the campaign.
        </p>

        <div className="hero__cta">
          <a href="#collection" className="hero__btn hero__btn--editorial">
            <span>View Collection</span>
          </a>
        </div>

        <div className="hero__credits">
          <div className="hero__credit">
            <span className="hero__credit-label">Creative Direction</span>
            <span className="hero__credit-value">Norman James</span>
          </div>
          <div className="hero__credit">
            <span className="hero__credit-label">Photography</span>
            <span className="hero__credit-value">Empathy Studio</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      <div className="hero__page-number">
        <span>P.</span>
        <span className="hero__page-num">01</span>
      </div>

      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />
    </section>
  );
}
