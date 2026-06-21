import { useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import './EditorialGallery.scss';

const GALLERY_ITEMS = [
  { id: 1, title: 'Silhouette I', category: 'Campaign', aspect: '3/4' },
  { id: 2, title: 'Negative Space', category: 'Editorial', aspect: '4/5' },
  { id: 3, title: 'Chrome Reflection', category: 'Still Life', aspect: '1/1' },
  { id: 4, title: 'The Pour', category: 'Campaign', aspect: '2/3' },
  { id: 5, title: 'Concrete Dreams', category: 'Interior', aspect: '3/4' },
  { id: 6, title: 'Minimalist Form', category: 'Editorial', aspect: '4/5' },
  { id: 7, title: 'Black on Black', category: 'Campaign', aspect: '1/1' },
  { id: 8, title: 'Steam & Light', category: 'Still Life', aspect: '2/3' },
  { id: 9, title: 'The Architect', category: 'Portrait', aspect: '3/4' },
  { id: 10, title: 'Gallery View', category: 'Interior', aspect: '4/5' },
  { id: 11, title: 'Ceramic Study', category: 'Still Life', aspect: '1/1' },
  { id: 12, title: 'Editorial I', category: 'Campaign', aspect: '2/3' },
  { id: 13, title: 'White Volume', category: 'Interior', aspect: '3/4' },
  { id: 14, title: 'The Ritual', category: 'Editorial', aspect: '4/5' },
  { id: 15, title: 'Noir Essence', category: 'Campaign', aspect: '2/3' },
];

export default function EditorialGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollTrigger({
    trigger: '.gallery__header',
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo(
        '.gallery__title .line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1 }
      );
    },
  });

  useScrollTrigger({
    trigger: '.gallery__grid',
    start: 'top 85%',
    onEnter: () => {
      gsap.fromTo(
        '.gallery__item',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out', stagger: 0.06 }
      );
    },
  });

  return (
    <section className="gallery section" id="gallery" ref={sectionRef}>
      <div className="gallery__header container">
        <div className="gallery__label text-label">
          <span className="gallery__label-line" />
          <span>Editorial Gallery</span>
        </div>
        <h2 className="gallery__title text-editorial">
          <span className="line">Fashion</span>
          <span className="line">Campaign</span>
        </h2>
      </div>

      <div className="gallery__grid">
        {GALLERY_ITEMS.map((item, i) => (
          <div
            className="gallery__item"
            key={item.id}
            style={{ '--aspect': item.aspect } as React.CSSProperties}
          >
            <div className="gallery__item-image">
              <div className="gallery__item-placeholder" />
            </div>
            <div className="gallery__item-info">
              <span className="gallery__item-index text-mono">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="gallery__item-meta">
                <span className="gallery__item-title text-body">{item.title}</span>
                <span className="gallery__item-category text-mono">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
