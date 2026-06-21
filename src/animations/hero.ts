import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createHeroAnimation(): gsap.core.Timeline {
  const tl = gsap.timeline({ delay: 0.2 });

  // Camera flash effect — editorial photoshoot feel
  tl.to('.hero__camera-flash', {
    opacity: 0.8,
    duration: 0.08,
    ease: 'power4.in',
  }, 0.3);
  tl.to('.hero__camera-flash', {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.out',
  }, 0.4);

  // Grid lines reveal — editorial layout
  tl.to('.hero__grid-line--v1', {
    scaleY: 1,
    duration: 1,
    ease: 'power3.inOut',
  }, 0.5);
  tl.to('.hero__grid-line--v2', {
    scaleY: 1,
    duration: 1,
    ease: 'power3.inOut',
  }, 0.6);
  tl.to('.hero__grid-line--h1', {
    scaleX: 1,
    duration: 1,
    ease: 'power3.inOut',
  }, 0.7);
  tl.to('.hero__grid-line--h2', {
    scaleX: 1,
    duration: 1,
    ease: 'power3.inOut',
  }, 0.8);

  // Silhouette draws — fashion figure
  tl.to('.hero__silhouette', {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  }, 0.8);
  tl.to('.hero__silhouette-path', {
    strokeDashoffset: 0,
    duration: 2,
    ease: 'power2.inOut',
  }, 1);
  tl.to('.hero__silhouette-head', {
    strokeDashoffset: 0,
    duration: 0.8,
    ease: 'power2.out',
  }, 2.5);

  // Issue tag
  tl.to('.hero__issue', {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  }, 1);

  // Title — dramatic editorial reveal
  tl.to('.hero__title-line--1', {
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
  }, 1.2);
  tl.to('.hero__title-line--2', {
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
  }, 1.5);

  // Tagline
  tl.to('.hero__tagline', {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  }, 2);

  // Subtitle
  tl.to('.hero__subtitle', {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  }, 2.2);

  // CTA
  tl.to('.hero__cta', {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  }, 2.4);

  // Credits
  tl.to('.hero__credits', {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  }, 2.6);

  // Scroll indicator
  tl.to('.hero__scroll-indicator', {
    opacity: 0.5,
    duration: 0.4,
    ease: 'power2.out',
  }, 2.8);

  // Page number
  tl.to('.hero__page-number', {
    opacity: 1,
    duration: 0.4,
    ease: 'power2.out',
  }, 2.9);

  // Corners
  tl.to('.hero__corner', {
    opacity: 0.3,
    duration: 0.3,
    stagger: 0.05,
    ease: 'power2.out',
  }, 2.7);

  return tl;
}

export function createHeroParallax(): void {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Title parallax — fast exit like magazine page turn
  gsap.to('.hero__title', {
    y: -80,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: '40% top',
      scrub: 1,
    },
  });

  // Silhouette parallax
  gsap.to('.hero__silhouette', {
    y: -60,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: '50% top',
      scrub: 1.5,
    },
  });

  // Grid lines fade
  gsap.to('.hero__grid-line', {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: '30% top',
      scrub: 1,
    },
  });
}
