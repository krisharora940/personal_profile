# Krish Arora Portfolio

Static portfolio site for Krish Arora. The site focuses on machine learning, trading research, and technical writing, with a premium visual style built from plain HTML, Tailwind CSS, and vanilla JavaScript.

## What’s Included

- `public/index.html` - homepage
- `public/pages/about.html` - about page
- `public/pages/research.html` - research and reading page
- `public/projects/trading-ml.html` - trading ML case study
- `src/css/main.css` - Tailwind input plus custom theme styles
- `src/js/theme.js` - theme manager
- `public/output.css` - compiled stylesheet used by the site

## Stack

- HTML5
- Tailwind CSS 4
- Vanilla JavaScript
- Static hosting only

## Scripts

```bash
npm install
npm run build
npm run watch
npm run serve
npm run dev
```

- `build` compiles `src/css/main.css` to `public/output.css`
- `watch` rebuilds CSS on change
- `serve` runs a local static server from `public/`
- `dev` runs `watch` and `serve` together

## Current UI

- Premium landing page with hero, featured work, background, experience, research preview, and contact footer
- Research page with a D2L reading tracker and notes placeholders
- About page with education, experience, interests, and goals
- Trading ML case study with overview, methodology, validation, and metrics sections
- Light/dark theme styling, scroll progress, glass cards, and animated reveals

## Current State Notes

- The site is fully static
- There is no backend or database
- Generated assets live in `public/`
- Some homepage links point to planned pages that are not implemented yet, including `authorcheck` and `ml-lab`

## Local Preview

Open `public/index.html` directly or run:

```bash
npm run dev
```

Then view the site through the local server in `public/`.

## Deployment

Build the CSS, then deploy the `public/` directory to any static host such as Vercel, Netlify, or GitHub Pages.
