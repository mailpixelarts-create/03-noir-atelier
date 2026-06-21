import { useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import './CreativeProcess.scss';

const PROCESS_ITEMS = [
  {
    number: '01',
    title: 'Storyboards',
    description: 'Every collection begins as a visual narrative. Mood boards, color studies, and cinematic references shape the vision.',
    tags: ['Mood Board', 'Reference', 'Vision'],
  },
  {
    number: '02',
    title: 'Material Samples',
    description: 'We source ceramic, steel, and glass from artisan studios. Each material tells a story of texture and light.',
    tags: ['Ceramic', 'Steel', 'Glass'],
  },
  {
    number: '03',
    title: 'Sketches',
    description: 'Hand-drawn compositions become the blueprint. From cup silhouette to spatial choreography.',
    tags: ['Drawing', 'Blueprint', 'Form'],
  },
  {
    number: '04',
    title: 'The Compose',
    description: 'Where concept meets execution. Every detail is placed with editorial precision.',
    tags: ['Precision', 'Editorial', 'Final'],
  },
];

export default function CreativeProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollTrigger({
    trigger: '.process__header',
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo(
        '.process__title .line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1 }
      );
    },
  });

  useScrollTrigger({
    trigger: '.process__grid',
    start: 'top 85%',
    onEnter: () => {
      gsap.fromTo(
        '.process__item',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out', stagger: 0.12 }
      );
    },
  });

  return (
    <section className="process section" ref={sectionRef}>
      <div className="process__header container">
        <div className="process__label text-label">
          <span className="process__label-line" />
          <span>Creative Process</span>
        </div>
        <h2 className="process__title text-editorial">
          <span className="line">From Concept</span>
          <span className="line">to Cup</span>
        </h2>
      </div>

      <div className="process__grid container">
        {PROCESS_ITEMS.map((item) => (
          <article className="process__item" key={item.number}>
            <div className="process__item-visual">
              <div className="process__item-placeholder">
                <div className="process__item-number-overlay text-editorial">
                  {item.number}
                </div>
              </div>
            </div>
            <div className="process__item-content">
              <div className="process__item-header">
                <span className="process__item-number text-mono">{item.number}</span>
                <h3 className="process__item-title text-editorial">{item.title}</h3>
              </div>
              <p className="process__item-desc text-body">{item.description}</p>
              <div className="process__item-tags">
                {item.tags.map((tag) => (
                  <span className="process__item-tag text-mono" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
