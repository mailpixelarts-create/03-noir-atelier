import { gsap } from 'gsap';

export function initCursorAnimations() {
  const cursor = document.querySelector('.cursor') as HTMLElement;
  if (!cursor || window.innerWidth < 1024) return;

  let mouseX = 0;
  let mouseY = 0;

  const onMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, {
      x: mouseX,
      y: mouseY,
      duration: 0.15,
      ease: 'power2.out',
    });
  };

  const onMouseEnter = () => {
    gsap.to(cursor, { opacity: 1, duration: 0.3 });
  };

  const onMouseLeave = () => {
    gsap.to(cursor, { opacity: 0, duration: 0.3 });
  };

  const onClick = () => {
    gsap.fromTo(
      cursor,
      { scale: 1 },
      {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
      }
    );
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseenter', onMouseEnter);
  document.addEventListener('mouseleave', onMouseLeave);
  document.addEventListener('click', onClick);

  // Interactive hover states
  const addHoverListeners = () => {
    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
  };

  addHoverListeners();
  const observer = new MutationObserver(addHoverListeners);
  observer.observe(document.body, { childList: true, subtree: true });

  return () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('click', onClick);
    observer.disconnect();
  };
}
