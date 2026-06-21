import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initGalleryAnimations() {
  const galleryGrid = document.querySelector('.gallery__grid');
  if (!galleryGrid) return;

  const items = gsap.utils.toArray<HTMLElement>('.gallery__item');

  items.forEach((item, i) => {
    gsap.fromTo(
      item,
      {
        y: 80,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
        },
        delay: i * 0.04,
      }
    );
  });

  // Parallax on individual images
  items.forEach((item) => {
    const img = item.querySelector('.gallery__item-placeholder') as HTMLElement;
    if (!img) return;

    gsap.fromTo(
      img,
      { y: -30 },
      {
        y: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}
