<div align="center">

# Portfolio Template

A reusable, fully data-driven developer portfolio built with React, TypeScript, and Vite.
Fork it, edit a single config file, and ship your own — no component code required.

[![Live Demo](https://img.shields.io/website?url=https%3A%2F%2Fboominathan2355.github.io%2FPortfolio%2F&label=demo&style=flat-square)](https://boominathan2355.github.io/Portfolio/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)

</div>

---

## Overview

This is a single-page portfolio site where content, layout, and branding are all driven by configuration rather than hardcoded into components. Two files control everything:

| File | Controls |
|---|---|
| [`src/config/portfolio.config.ts`](src/config/portfolio.config.ts) | All content — identity, bio, social links, skills, projects, experience, education, certifications, timeline, theme accent color, and which sections appear in what order |
| [`.env`](.env.example) | Deployment-specific values — EmailJS credentials, canonical site URL, build base path, and the SEO/Open Graph meta tags baked into `index.html` at build time |

Edit those two files and the site is yours. No JSX, no CSS, no build script changes needed for a standard reskin.

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Configuration reference](#configuration-reference)
- [Contact form setup](#contact-form-setup)
- [Section toggles and reordering](#section-toggles-and-reordering)
- [Theming](#theming)
- [Deployment](#deployment)
- [Project structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

## Features

- **Single-config content model** — one TypeScript file for everything the page renders
- **Toggleable, reorderable sections** — enable/disable and reorder page sections without touching components
- **Runtime theme accent** — set light/dark accent colors in config, applied via CSS custom properties
- **Responsive, dark/light/system** theme support out of the box
- **SEO-ready** — meta tags, Open Graph, Twitter Card, and JSON-LD structured data, templated from environment variables at build time
- **EmailJS-powered contact form** with a visible "not configured" state instead of silent failures
- **Command palette** (⌘K) for keyboard-driven navigation
- **Generated `manifest.json`, `sitemap.xml`, and `robots.txt`** — built from `.env` at build time instead of hand-maintained

## Tech stack

<div align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=flat-square&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/EmailJS-FF6C37?style=flat-square" />
</div>

## Quick start

**Requirements:** Node.js 18+ and npm.

```bash
git clone https://github.com/Boominathan2355/Portfolio.git my-portfolio
cd my-portfolio
npm install
cp .env.example .env
```

1. **Edit `.env`.** At minimum, set `VITE_SITE_URL`, `VITE_AUTHOR_NAME`, `VITE_AUTHOR_EMAIL`, `VITE_SITE_TITLE`, and `VITE_SITE_DESCRIPTION`. See [Configuration reference](#configuration-reference) for every field.
2. **Edit `src/config/portfolio.config.ts`.** Replace `name`, `bio`, `about`, `social`, `skills`, `projects`, `experience`, `education`, `certifications`, `achievements`, `currentFocus`, `timeline`, and `aiEngineering` with your own content. TypeScript will flag anything left in the wrong shape.
3. **Replace assets in `public/`** — `profile.jpg`, `working.jpg`, your resume PDF (and update `resumeFile` in the config to match), and project images under `public/projects/`.
4. **Update the JSON-LD arrays in `index.html`.** `sameAs`, `alumniOf`, `knowsAbout`, and `knowsLanguage` are arrays and can't be templated by environment variables — edit them by hand to match your own links, education, and skills.
5. **Run the dev server:**
   ```bash
   npm run dev
   ```

## Configuration reference

### `src/config/portfolio.config.ts`

| Field | Purpose |
|---|---|
| `name`, `title`, `headline`, `statusChip`, `bio` | Hero identity copy |
| `about` | Paragraphs rendered in the About section |
| `social` | `{ name, url, icon }[]` — `icon` must be one of `github`, `linkedin`, `code`, `terminal` (see `iconMap` in `Footer.tsx`) |
| `resumeFile`, `profileImage`, `workImage` | Filenames resolved against `public/` |
| `theme.defaultMode` | `'dark' \| 'light' \| 'system'` |
| `theme.accent` | `{ light, dark }` HSL triplets without the `hsl()` wrapper, e.g. `"221 83% 53%"` — applied at runtime as the `--primary` CSS variable |
| `sections` | Ordered array controlling page layout. Reorder the array to reorder the page; `enabled: false` removes a section entirely; `showInNav: false` keeps it reachable via scroll/command palette but off the top navbar |
| `skills`, `projects`, `education`, `experience`, `certifications`, `achievements`, `currentFocus`, `timeline`, `aiEngineering` | Content collections — see the interfaces at the top of the file for exact shapes |

Section `id` values are fixed (they double as DOM ids for scroll targeting): `about`, `experience`, `focus`, `skills`, `projects`, `ai-engineering`, `timeline`, `education`, `certifications`, `contact`. `hero` and the footer always render and aren't part of the toggle list.

### `.env` (copy from `.env.example`)

| Variable | Used for |
|---|---|
| `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` | Contact form delivery — see [Contact form setup](#contact-form-setup) |
| `VITE_SITE_URL` | Canonical URL — drives `sitemap.xml`, `robots.txt`, and canonical/OG/Twitter/JSON-LD URLs |
| `VITE_BASE_PATH` | Built asset base path. Leave blank (defaults to `/`) for Vercel, Netlify, or a custom domain. Set to `/your-repo-name/` for a GitHub Pages project site |
| `VITE_SITE_TITLE`, `VITE_SITE_DESCRIPTION`, `VITE_SITE_KEYWORDS` | `<title>`, meta description, meta keywords |
| `VITE_AUTHOR_NAME`, `VITE_AUTHOR_EMAIL` | JSON-LD and meta author fields |
| `VITE_THEME_COLOR` | Browser UI theme color (`<meta name="theme-color">`, manifest) |
| `VITE_TWITTER_HANDLE` | `twitter:site` / `twitter:creator` |
| `VITE_GOOGLE_SITE_VERIFICATION` | Google Search Console verification meta tag |
| `VITE_GEO_REGION`, `VITE_GEO_PLACENAME` | Geo meta tags |
| `VITE_OG_IMAGE` | Absolute URL used for social share previews (`og:image` / `twitter:image`) |

All of these are public by design: EmailJS's "public key" is meant for client-side use, and everything else ends up in the built JS bundle or plain HTML regardless. Nothing here needs to be a real secret — `.env` is gitignored purely to keep per-deployment values out of source control, not to hide them.

## Contact form setup

The form uses [EmailJS](https://www.emailjs.com) (free tier: 200 emails/month).

1. Create an EmailJS account, add an **Email Service** (Gmail, Outlook, etc.), and create an **Email Template**.
2. The template body must reference these exact variable names — they match the form's input `name` attributes:
   ```
   Name: {{user_name}}
   Email: {{user_email}}
   Subject: {{subject}}
   Message: {{message}}
   ```
3. Copy the Service ID, Template ID, and Public Key (Account → General) into `.env`.

If these values are missing, the form stays visibly disabled with an "Email not configured" state instead of failing silently, and a reminder is logged to the browser console.

## Section toggles and reordering

Everything is driven by `portfolioConfig.sections` in `src/config/portfolio.config.ts`:

```ts
sections: [
  { id: 'about', label: 'About', icon: User, enabled: true, showInNav: true },
  // ...
]
```

- **Remove a section from the page:** set `enabled: false`.
- **Reorder the page:** reorder this array.
- **Keep a section reachable without cluttering the navbar:** set `showInNav: false` — it stays available via scroll and the command palette.

## Theming

Set `theme.accent.light` / `theme.accent.dark` in the config (HSL triplet, e.g. `"142 71% 45%"` for green) — applied at runtime with no CSS edits required. For deeper styling changes (fonts, radii, spacing scale), see `tailwind.config.js` and `src/index.css`.

## Deployment

### GitHub Pages

```bash
# In .env: VITE_BASE_PATH=/your-repo-name/, VITE_SITE_URL=https://<user>.github.io/<repo>
npm run deploy
```

Also update the `homepage` field in `package.json` to match. This command runs `vite build`, regenerates `sitemap.xml`, `robots.txt`, and `manifest.json` from `.env`, and publishes `dist/` via `gh-pages`.

### Vercel

```bash
npx vercel link
npx vercel --prod
```

Leave `VITE_BASE_PATH` unset (defaults to `/`) — Vercel serves from the domain root. Set the same variables from `.env` in the Vercel project's Environment Variables settings, since `.env` itself is never uploaded.

## Project structure

```
├── public/                       Static assets — profile/work photos, resume, project images
├── src/
│   ├── config/
│   │   └── portfolio.config.ts   The single content config file
│   ├── components/
│   │   ├── sections/             One component per page section
│   │   ├── layout/                Navbar, Footer, Section wrapper, Container
│   │   └── features/              Command palette, scroll progress
│   ├── hooks/
│   ├── App.tsx                   Renders sections dynamically from config
│   └── main.tsx
├── scripts/
│   ├── generate-sitemap.js       Builds sitemap.xml + robots.txt from .env
│   └── generate-manifest.js      Builds manifest.json from .env
├── .env.example                  Copy to .env and fill in
├── vite.config.ts                Reads VITE_BASE_PATH
└── index.html                    SEO/OG/JSON-LD, templated via Vite's %VITE_*% env replacement
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check-free production build, then regenerate `sitemap.xml`, `robots.txt`, and `manifest.json` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## License

Released under the [MIT License](LICENSE). Fork it, replace the content, and make it yours — attribution is appreciated but not required.
