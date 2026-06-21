import { useEffect, useState } from 'react';
import { useLenis } from './hooks/useLenis';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Manifesto from './components/Manifesto/Manifesto';
import Collection from './components/Collection/Collection';
import EditorialGallery from './components/EditorialGallery/EditorialGallery';
import RunwayFilm from './components/RunwayFilm/RunwayFilm';
import CreativeProcess from './components/CreativeProcess/CreativeProcess';
import TheStudio from './components/TheStudio/TheStudio';
import FashionCalendar from './components/FashionCalendar/FashionCalendar';
import Journal from './components/Journal/Journal';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Cursor />
      <Navigation />
      <main data-barba="container">
        <Hero />
        <Manifesto />
        <Collection />
        <EditorialGallery />
        <RunwayFilm />
        <CreativeProcess />
        <TheStudio />
        <FashionCalendar />
        <Journal />
      </main>
      <Footer />
    </>
  );
}
