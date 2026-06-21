import { useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import './FashionCalendar.scss';

const EVENTS = [
  {
    date: '15 Jul 2026',
    title: 'Collection 07 — Monochrome',
    location: 'Noir Atelier, Berlin',
    type: 'Launch',
  },
  {
    date: '22 Jul 2026',
    title: 'Ceramic × Coffee Workshop',
    location: 'Studio Kitchen',
    type: 'Workshop',
  },
  {
    date: '03 Aug 2026',
    title: 'Guest Barista — Yuki Tanaka',
    location: 'The Tasting Counter',
    type: 'Collaboration',
  },
  {
    date: '18 Aug 2026',
    title: 'Fashion Week Afterparty',
    location: 'Noir Atelier, Paris',
    type: 'Event',
  },
  {
    date: '05 Sep 2026',
    title: 'Exhibition — Concrete Volumes',
    location: 'Gallery Wall',
    type: 'Exhibition',
  },
  {
    date: '20 Sep 2026',
    title: 'Collection 08 — Silver Screen',
    location: 'Noir Atelier, Milan',
    type: 'Launch',
  },
];

export default function FashionCalendar() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollTrigger({
    trigger: '.calendar__header',
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo(
        '.calendar__title .line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1 }
      );
    },
  });

  useScrollTrigger({
    trigger: '.calendar__list',
    start: 'top 85%',
    onEnter: () => {
      gsap.fromTo(
        '.calendar__event',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.08 }
      );
    },
  });

  return (
    <section className="calendar section" ref={sectionRef}>
      <div className="calendar__header container">
        <div className="calendar__label text-label">
          <span className="calendar__label-line" />
          <span>Fashion Calendar</span>
        </div>
        <h2 className="calendar__title text-editorial">
          <span className="line">Upcoming</span>
        </h2>
      </div>

      <div className="calendar__list container">
        {EVENTS.map((event, i) => (
          <article className="calendar__event" key={i}>
            <div className="calendar__event-date text-mono">
              {event.date}
            </div>
            <div className="calendar__event-content">
              <h3 className="calendar__event-title text-editorial">
                {event.title}
              </h3>
              <span className="calendar__event-location text-body">
                {event.location}
              </span>
            </div>
            <div className="calendar__event-type">
              <span className="calendar__event-type-badge text-mono">
                {event.type}
              </span>
            </div>
            <div className="calendar__event-line" />
          </article>
        ))}
      </div>
    </section>
  );
}
