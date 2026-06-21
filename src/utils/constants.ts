// ─── NOIR ATELIER — Constants ───

export const BRAND = {
  name: 'NOIR ATELIER',
  tagline: 'International Fashion Café',
  motto: 'Where coffee becomes couture',
  philosophy: "We don't serve coffee. We compose moments.",
} as const;

export const COLORS = {
  black: '#0A0A0A',
  deepBlack: '#050505',
  white: '#FAFAFA',
  pureWhite: '#FFFFFF',
  concrete: '#B8B5B0',
  concreteLight: '#D4D0CB',
  chrome: '#C8C8C8',
  mirror: '#E0E0E0',
  softBeige: '#E8E4DF',
  mutedSand: '#D4CFC7',
  graphite: '#3A3A3A',
  charcoal: '#1A1A1A',
} as const;

export const NAV_LINKS = [
  { label: 'Collection', href: '#collection' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Film', href: '#film' },
  { label: 'Studio', href: '#studio' },
  { label: 'Journal', href: '#journal' },
] as const;

export const COLLECTIONS = [
  {
    number: '01',
    title: 'Black Espresso',
    subtitle: 'The Foundation',
    description: 'Single-origin Ethiopian Yirgacheffe. Pulled at 93°C.',
    notes: ['Dark Cocoa', 'Black Cherry', 'Smoke'],
    price: '€8.50',
  },
  {
    number: '02',
    title: 'Ivory Latte',
    subtitle: 'The Contrast',
    description: 'Oat milk microfoam on double ristretto.',
    notes: ['Vanilla Bean', 'Steamed Oat', 'Caramel'],
    price: '€9.00',
  },
  {
    number: '03',
    title: 'Concrete Cold Brew',
    subtitle: 'The Structure',
    description: '24-hour steep. Slow-drip through basalt filter.',
    notes: ['Dark Chocolate', 'Walnut', 'Earth'],
    price: '€10.00',
  },
  {
    number: '04',
    title: 'Chrome Affogato',
    subtitle: 'The Sculpture',
    description: 'Gelato al tartufo nero drowned in espresso.',
    notes: ['Black Truffle', 'Hazelnut', 'Cream'],
    price: '€12.00',
  },
  {
    number: '05',
    title: 'Mirror Matcha',
    subtitle: 'The Reflection',
    description: 'Ceremonial grade Uji matcha. Whisked to perfection.',
    notes: ['Umami', 'Sweet Grass', 'Silk'],
    price: '€11.00',
  },
  {
    number: '06',
    title: 'Noir Pour-Over',
    subtitle: 'The Ritual',
    description: 'Panama Geisha beans, hand-ground, poured at 91°C.',
    notes: ['Jasmine', 'Bergamot', 'Honey'],
    price: '€14.00',
  },
] as const;

export const EVENTS = [
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
] as const;

export const JOURNAL_ARTICLES = [
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
] as const;

export const STUDIO_INFO = {
  address: 'Torstraße 140, 10119 Berlin, Germany',
  hours: 'Tue — Sun, 08:00 — 22:00',
  email: 'hello@noiratelier.com',
  phone: '+49 30 1234 5678',
  stats: {
    space: '340 m²',
    ceiling: '6 m',
    seats: '12 seats',
  },
} as const;

export const FOOTER_TEXT = {
  lookbook: 'A LOOKBOOK Studio Experience',
  copyright: '© Norman James',
  credits: 'Made with ❤️ by Empathy Studio',
} as const;
