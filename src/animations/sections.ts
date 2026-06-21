import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initSectionAnimations() {
  // Generic reveal for .reveal elements
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => el.classList.add('is-revealed'),
    });
  });

  // Stagger children
  gsap.utils.toArray<HTMLElement>('.stagger-children').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => el.classList.add('is-revealed'),
    });
  });

  // Collection items
  gsap.utils.toArray<HTMLElement>('.collection__item').forEach((item, i) => {
    gsap.fromTo(
      item,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
        },
        delay: i * 0.05,
      }
    );
  });

  // Calendar events
  gsap.utils.toArray<HTMLElement>('.calendar__event').forEach((item, i) => {
    gsap.fromTo(
      item,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
        },
        delay: i * 0.04,
      }
    );
  });
}
