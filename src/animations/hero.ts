import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimations() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  gsap.to('.hero__bg', {
    y: '20%',
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  const handleMouseMove = (e: MouseEvent) => {
    const bg = document.querySelector('.hero__bg') as HTMLElement;
    if (!bg) return;

    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.height / 2) / rect.height;

    gsap.to(bg, {
      x: x * 30,
      y: y * 30,
      duration: 1.2,
      ease: 'power2.out',
    });
  };

  hero.addEventListener('mousemove', handleMouseMove);

  return () => {
    hero.removeEventListener('mousemove', handleMouseMove);
  };
}
