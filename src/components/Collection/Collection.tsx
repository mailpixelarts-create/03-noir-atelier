import { useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import './Collection.scss';

const COLLECTIONS = [
  {
    number: '01',
    title: 'Black Espresso',
    subtitle: 'The Foundation',
    description: 'Single-origin Ethiopian Yirgacheffe. Pulled at 93°C. Served in hand-thrown ceramic by Atelier Noir.',
    notes: ['Dark Cocoa', 'Black Cherry', 'Smoke'],
    price: '€8.50',
  },
  {
    number: '02',
    title: 'Ivory Latte',
    subtitle: 'The Contrast',
    description: 'Oat milk microfoam on double ristretto. A study in white on black.',
    notes: ['Vanilla Bean', 'Steamed Oat', 'Caramel'],
    price: '€9.00',
  },
  {
    number: '03',
    title: 'Concrete Cold Brew',
    subtitle: 'The Structure',
    description: '24-hour steep. Slow-drip through basalt filter. Served over hand-carved ice.',
    notes: ['Dark Chocolate', 'Walnut', 'Earth'],
    price: '€10.00',
  },
  {
    number: '04',
    title: 'Chrome Affogato',
    subtitle: 'The Sculpture',
    description: 'Gelato al tartufo nero drowned in espresso. Architecture in a glass.',
    notes: ['Black Truffle', 'Hazelnut', 'Cream'],
    price: '€12.00',
  },
  {
    number: '05',
    title: 'Mirror Matcha',
    subtitle: 'The Reflection',
    description: 'Ceremonial grade Uji matcha. Whisked to perfection. Reflective green on white.',
    notes: ['Umami', 'Sweet Grass', 'Silk'],
    price: '€11.00',
  },
  {
    number: '06',
    title: 'Noir Pour-Over',
    subtitle: 'The Ritual',
    description: 'Panama Geisha beans, hand-ground, poured at 91°C. A ceremony of precision.',
    notes: ['Jasmine', 'Bergamot', 'Honey'],
    price: '€14.00',
  },
];

export default function Collection() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollTrigger({
    trigger: '.collection__header',
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo(
        '.collection__title .line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1 }
      );
      gsap.fromTo(
        '.collection__subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 0.3 }
      );
    },
  });

  return (
    <section className="collection section" id="collection" ref={sectionRef}>
      <div className="collection__header container">
        <div className="collection__label text-label">
          <span className="collection__label-line" />
          <span>Collection SS26</span>
        </div>
        <h2 className="collection__title text-editorial">
          <span className="line">The Drinks</span>
        </h2>
        <p className="collection__subtitle text-body">
          Each beverage is a composition — curated, designed, served as art.
        </p>
      </div>

      <div className="collection__grid container">
        {COLLECTIONS.map((item, i) => (
          <article className="collection__item" key={item.number}>
            <div className="collection__item-number text-mono">
              {item.number}
            </div>
            <div className="collection__item-content">
              <div className="collection__item-header">
                <h3 className="collection__item-title text-editorial">
                  {item.title}
                </h3>
                <span className="collection__item-subtitle text-label">
                  {item.subtitle}
                </span>
              </div>
              <p className="collection__item-desc text-body">
                {item.description}
              </p>
              <div className="collection__item-notes">
                {item.notes.map((note) => (
                  <span className="collection__item-note text-mono" key={note}>
                    {note}
                  </span>
                ))}
              </div>
            </div>
            <div className="collection__item-price text-mono">
              {item.price}
            </div>
            <div className="collection__item-line" />
          </article>
        ))}
      </div>
    </section>
  );
}
