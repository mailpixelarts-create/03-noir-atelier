import { useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import './TheStudio.scss';

const STUDIO_IMAGES = [
  { id: 1, label: 'Main Hall', size: 'large' },
  { id: 2, label: 'Tasting Room', size: 'medium' },
  { id: 3, label: 'The Bar', size: 'medium' },
  { id: 4, label: 'Gallery Wall', size: 'small' },
  { id: 5, label: 'Kitchen Studio', size: 'small' },
  { id: 6, label: 'Terrace', size: 'small' },
];

export default function TheStudio() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollTrigger({
    trigger: '.studio__header',
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo(
        '.studio__title .line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1 }
      );
      gsap.fromTo(
        '.studio__desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 0.3 }
      );
    },
  });

  useScrollTrigger({
    trigger: '.studio__grid',
    start: 'top 85%',
    onEnter: () => {
      gsap.fromTo(
        '.studio__image',
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1 }
      );
    },
  });

  return (
    <section className="studio section" id="studio" ref={sectionRef}>
      <div className="studio__header container">
        <div className="studio__label text-label">
          <span className="studio__label-line" />
          <span>The Studio</span>
        </div>
        <h2 className="studio__title text-editorial">
          <span className="line">The Space</span>
        </h2>
        <p className="studio__desc text-body">
          Concrete volumes. Black steel frames. Mirror surfaces. A space designed
          like a gallery — where every angle is a composition.
        </p>
      </div>

      <div className="studio__grid container">
        {STUDIO_IMAGES.map((img) => (
          <div
            className={`studio__image studio__image--${img.size}`}
            key={img.id}
          >
            <div className="studio__image-inner">
              <div className="studio__image-placeholder" />
            </div>
            <div className="studio__image-label">
              <span className="text-mono">{img.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="studio__stats container">
        <div className="studio__stat">
          <span className="studio__stat-number text-editorial">340</span>
          <span className="studio__stat-unit text-mono">m²</span>
          <span className="studio__stat-label text-mono">Total Space</span>
        </div>
        <div className="studio__stat">
          <span className="studio__stat-number text-editorial">6</span>
          <span className="studio__stat-unit text-mono">m</span>
          <span className="studio__stat-label text-mono">Ceiling Height</span>
        </div>
        <div className="studio__stat">
          <span className="studio__stat-number text-editorial">12</span>
          <span className="studio__stat-unit text-mono">seats</span>
          <span className="studio__stat-label text-mono">Tasting Counter</span>
        </div>
      </div>
    </section>
  );
}
