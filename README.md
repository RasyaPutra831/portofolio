# Rasya Putra — Portfolio

React 19 + Vite + Tailwind CSS 4 + Framer Motion + Lenis.

```bash
npm install
npm run dev
```

## Editing content

Most content lives in `src/data/` — no need to touch components:

| File | What it controls |
|---|---|
| `site.js` | Name, role, email, location, social links, nav |
| `Projects.js` | Work section. The **first** project is shown large (featured). |
| `expertise.js` | Expertise list (01–04) |
| `experience.js` | Experience section |

In headings, wrap a word in `*asterisks*` to render it as the italic serif accent
(e.g. `lines={["Selected *work.*"]}`).

## Structure

```
src/
  components/
    layout/Navbar.jsx
    sections/  Hero, About, Work, Expertise, Experience, Contact (incl. dark statement)
    ui/        Button, Tag, BrowserFrame, SectionHeading, Container, Cursor
    animations/ FadeIn, TextReveal
  hooks/useSmoothScroll.js   (Lenis; disabled for prefers-reduced-motion)
  data/
  styles/Globals.css         (colour + font tokens in @theme)
```
