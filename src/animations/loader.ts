import { gsap } from 'gsap';

export function createLoaderAnimation(
  onComplete: () => void
): gsap.core.Timeline {
  const tl = gsap.timeline({
    onComplete: () => {
      document.body.classList.remove('loading');
      onComplete();
    },
  });

  document.body.classList.add('loading');

  tl.set('.loader__overlay', { clipPath: 'inset(0 0 0 0)' })
    .fromTo(
      '.loader__text',
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' },
      0.2
    )
    .fromTo(
      '.loader__progress-bar',
      { scaleX: 0 },
      { scaleX: 1, duration: 2.4, ease: 'expo.inOut' },
      0.4
    )
    .to('.loader__text', {
      y: -60,
      opacity: 0,
      duration: 0.6,
      ease: 'expo.in',
    }, 2.8)
    .to('.loader__overlay', {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.8,
      ease: 'expo.inOut',
    }, 3.0);

  return tl;
}
