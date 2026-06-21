import { useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import './Journal.scss';

const ARTICLES = [
  {
    number: '01',
    title: 'The Art of Negative Space',
    category: 'Philosophy',
    date: 'Jun 2026',
    excerpt: 'How emptiness becomes the most powerful element in design.',
  },
  {
    number: '02',
    title: 'Concrete & Ceramics',
    category: 'Materials',
    date: 'May 2026',
    excerpt: 'The material dialogue between industrial architecture and handmade vessels.',
  },
  {
    number: '03',
    title: 'Editorial Pour-Over',
    category: 'Process',
    date: 'Apr 2026',
    excerpt: 'A visual essay on the choreography of coffee preparation.',
  },
];

export default function Journal() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollTrigger({
    trigger: '.journal__header',
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo(
        '.journal__title .line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1 }
      );
    },
  });

  useScrollTrigger({
    trigger: '.journal__grid',
    start: 'top 85%',
    onEnter: () => {
      gsap.fromTo(
        '.journal__article',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out', stagger: 0.12 }
      );
    },
  });

  return (
    <section className="journal section" id="journal" ref={sectionRef}>
      <div className="journal__header container">
        <div className="journal__label text-label">
          <span className="journal__label-line" />
          <span>Journal</span>
        </div>
        <h2 className="journal__title text-editorial">
          <span className="line">Stories</span>
        </h2>
      </div>

      <div className="journal__grid container">
        {ARTICLES.map((article) => (
          <article className="journal__article" key={article.number}>
            <div className="journal__article-image">
              <div className="journal__article-placeholder" />
              <div className="journal__article-number text-editorial">
                {article.number}
              </div>
            </div>
            <div className="journal__article-content">
              <div className="journal__article-meta">
                <span className="journal__article-category text-mono">
                  {article.category}
                </span>
                <span className="journal__article-date text-mono">
                  {article.date}
                </span>
              </div>
              <h3 className="journal__article-title text-editorial">
                {article.title}
              </h3>
              <p className="journal__article-excerpt text-body">
                {article.excerpt}
              </p>
              <span className="journal__article-link text-label">
                Read Article
                <span className="journal__article-link-line" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
