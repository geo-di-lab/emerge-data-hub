# EMERGE Data Hub

A landing page that links to EMERGE projects from the GeoDI Lab: textbooks, the `geoemerge` Python package, the EMERGE website, the GLOBE Land Cover 3D app, and `ask-globe`.

Built with React, Vite, and Tailwind CSS. The page has light and dark modes. Cards for projects with a Spanish version have an English / Español switch.

## Development

Requires Node.js 20 or later.

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Files

- `src/projects.js`: the project list (titles, descriptions, links, translations)
- `src/ProjectCard.jsx`: a project card with optional language tabs
- `src/ThemeToggle.jsx`: light/dark mode button
- `src/App.jsx`: page layout
- `src/index.css`: Tailwind setup and logo colors
- `public/`: resized logo and favicon made from `GeoDI_Logo.png`

## Adding a project

Add an entry to `src/projects.js`. Give it an `en` block, plus an `es` block if there's a Spanish version; the language tabs appear automatically when `es` is present.

## Publishing

`.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages on every push to `main`. To turn it on, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
