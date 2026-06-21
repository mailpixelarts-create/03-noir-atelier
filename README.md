# NOIR ATELIER

**International Fashion Café**

Where coffee becomes couture.

---

## Brand

- **Concept:** Luxury Editorial, Minimal Fashion, Museum Architecture, High Fashion Gallery
- **Aesthetic:** Clean, massive white volumes, concrete, black steel, mirror, editorial lighting, negative space
- **Experience:** Walking inside an editorial photoshoot

## Colors

| Name | Hex | Usage |
|------|-----|-------|
| Pure White | `#FAFAFA` | Text, highlights |
| Deep Black | `#0A0A0A` | Background |
| Concrete Grey | `#B8B5B0` | Secondary text |
| Chrome | `#C8C8C8` | Accents |
| Mirror Silver | `#E0E0E0` | Surfaces |
| Soft Beige | `#E8E4DF` | Warm accents |
| Muted Sand | `#D4CFC7` | Neutral tones |
| Graphite | `#3A3A3A` | Muted text |

## Typography

- **Display:** Playfair Display / Canela
- **Body:** Inter / Neue Montreal
- **Mono:** SF Mono / Fira Code

## Stack

- Vite + React + TypeScript
- SCSS with design tokens
- GSAP + ScrollTrigger
- Lenis smooth scroll
- SplitType text splitting
- Barba.js page transitions

## Sections

1. **Loader** — Editorial loader with white canvas wipes, large typography, film grain
2. **Navigation** — Minimal top bar with mobile menu
3. **Hero** — Fullscreen editorial with campaign film, huge typography, mouse-reactive camera
4. **Manifesto** — "We don't serve coffee. We compose moments." pinned section
5. **Collection** — Drinks as fashion collections (Collection 01 Black Espresso, etc.)
6. **Editorial Gallery** — 15 fashion campaign photographs with magazine spacing
7. **Runway Film** — Autoplay silent video, pinned cinematic section
8. **Creative Process** — Grid with storyboards, material samples, sketches
9. **The Studio** — Concrete, steel, white interiors with parallax
10. **Fashion Calendar** — Upcoming collaborations and launches
11. **Journal** — Magazine articles with huge images
12. **Footer** — Animated logo, infinite marquee, credits

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
03-noir-atelier/
├── public/
├── src/
│   ├── animations/
│   │   ├── hero.ts
│   │   ├── loader.ts
│   │   ├── sections.ts
│   │   ├── gallery.ts
│   │   └── cursor.ts
│   ├── components/
│   │   ├── Loader/
│   │   ├── Navigation/
│   │   ├── Hero/
│   │   ├── Manifesto/
│   │   ├── Collection/
│   │   ├── EditorialGallery/
│   │   ├── RunwayFilm/
│   │   ├── CreativeProcess/
│   │   ├── TheStudio/
│   │   ├── FashionCalendar/
│   │   ├── Journal/
│   │   ├── Footer/
│   │   └── Cursor/
│   ├── hooks/
│   │   ├── useLenis.ts
│   │   ├── useScrollTrigger.ts
│   │   └── useSplitType.ts
│   ├── styles/
│   │   ├── variables.scss
│   │   ├── global.scss
│   │   └── animations.scss
│   ├── utils/
│   │   └── constants.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

**A LOOKBOOK Studio Experience**
**© Norman James**
**Made with ❤️ by Empathy Studio**
