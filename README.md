<div align="center">
  <h1>✨ Portfolio Template</h1>
  <p>A reusable, fully data-driven developer portfolio. Fork it, edit one config file, ship your own.</p>

  [![Website](https://img.shields.io/website?url=https%3A%2F%2Fboominathan2355.github.io%2FPortfolio%2F&style=for-the-badge)](https://boominathan2355.github.io/Portfolio/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
</div>

## What this is

A React + TypeScript + Vite portfolio site where **almost everything** — your bio, projects, skills, timeline, theme color, which sections exist and in what order, SEO/social meta tags — is driven by two files:

- **`src/config/portfolio.config.ts`** — all content: identity, about text, social links, skills, projects, experience, education, certifications, achievements, current focus, timeline, AI/tech deep-dives, theme accent color, and the section registry (order/visibility/nav).
- **`.env`** — deployment-specific and secret-adjacent values: EmailJS credentials, canonical site URL, base path, and the SEO/OG meta tags baked into `index.html` at build time.

No component code needs to change to reskin this for yourself.

## Features

<div align="center">
  <table>
    <tr>
      <td>⚙️ Single-config content model</td>
      <td>🧩 Toggleable / reorderable sections</td>
      <td>🎨 Config-driven accent theme</td>
    </tr>
    <tr>
      <td>📱 Responsive, dark/light/system</td>
      <td>🔍 SEO + JSON-LD, env-templated</td>
      <td>📨 EmailJS contact form</td>
    </tr>
    <tr>
      <td>⌘K command palette</td>
      <td>📱 PWA manifest (generated)</td>
      <td>🗺️ Sitemap + robots.txt (generated)</td>
    </tr>
  </table>
</div>

## Tech Stack

<div align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
</div>

## Quick start

```bash
git clone https://github.com/Boominathan2355/Portfolio.git my-portfolio
cd my-portfolio
npm install
cp .env.example .env
```

1. **Edit `.env`** — at minimum set `VITE_SITE_URL`, `VITE_AUTHOR_NAME`, `VITE_AUTHOR_EMAIL`, `VITE_SITE_TITLE`, `VITE_SITE_DESCRIPTION`. See [Configuration reference](#configuration-reference) below for every field.
2. **Edit `src/config/portfolio.config.ts`** — replace `name`, `bio`, `about`, `social`, `skills`, `projects`, `experience`, `education`, `certifications`, `achievements`, `currentFocus`, `timeline`, and `aiEngineering` with your own. TypeScript will flag anything left in the wrong shape.
3. **Replace assets in `public/`** — `profile.jpg`, `working.jpg`, your resume PDF (update `resumeFile` in the config to match its filename), and project images under `public/projects/`.
4. **Edit the JSON-LD arrays in `index.html`** — `sameAs`, `alumniOf`, `knowsAbout`, `knowsLanguage` can't be templated by env vars (they're arrays); update them by hand to match your own links/education/skills.
5. Run it:
   ```bash
   npm run dev
   ```

## Configuration reference

### `src/config/portfolio.config.ts`

| Field | Purpose |
|---|---|
| `name`, `title`, `headline`, `statusChip`, `bio` | Hero identity copy |
| `about` | Array of paragraphs for the About section |
| `social` | `{ name, url, icon }[]` — `icon` must be one of `github`, `linkedin`, `code`, `terminal` (see `Footer.tsx`'s `iconMap`) |
| `resumeFile`, `profileImage`, `workImage` | Filenames resolved against `public/` |
| `theme.defaultMode` | `'dark' \| 'light' \| 'system'` |
| `theme.accent` | `{ light, dark }` HSL triplets (no `hsl()` wrapper), e.g. `"221 83% 53%"` — applied at runtime as the `--primary` CSS variable |
| `sections` | Ordered array controlling page layout. Reorder the array to reorder the page. `enabled: false` removes a section entirely; `showInNav: false` keeps it on the page and in the ⌘K palette but off the top navbar |
| `skills`, `projects`, `education`, `experience`, `certifications`, `achievements`, `currentFocus`, `timeline`, `aiEngineering` | Content collections — see the interfaces at the top of the file for exact shapes |

Section `id`s are fixed (they're also DOM ids used for scroll targeting): `about`, `experience`, `focus`, `skills`, `projects`, `ai-engineering`, `timeline`, `education`, `certifications`, `contact`. `hero` and the footer always render and aren't part of the toggle list.

### `.env` (copy from `.env.example`)

| Variable | Used for |
|---|---|
| `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` | Contact form delivery (see [Contact form setup](#contact-form-setup)) |
| `VITE_SITE_URL` | Canonical URL — drives `sitemap.xml`, `robots.txt`, canonical/OG/Twitter/JSON-LD URLs |
| `VITE_BASE_PATH` | Built asset base path. Leave blank (`/`) for Vercel/Netlify/custom domain. Set to `/your-repo-name/` for a GitHub Pages **project** site |
| `VITE_SITE_TITLE`, `VITE_SITE_DESCRIPTION`, `VITE_SITE_KEYWORDS` | `<title>`, meta description, meta keywords |
| `VITE_AUTHOR_NAME`, `VITE_AUTHOR_EMAIL` | JSON-LD / meta author fields |
| `VITE_THEME_COLOR` | Browser UI theme color (`<meta name="theme-color">`, manifest) |
| `VITE_TWITTER_HANDLE` | `twitter:site` / `twitter:creator` |
| `VITE_GOOGLE_SITE_VERIFICATION` | Google Search Console verification meta tag |
| `VITE_GEO_REGION`, `VITE_GEO_PLACENAME` | Geo meta tags |
| `VITE_OG_IMAGE` | Absolute URL for social share previews (`og:image`/`twitter:image`) |

All of these are public by design — EmailJS's "public key" is meant for client-side use, and everything else ends up in either the built JS bundle or plain HTML anyway. Nothing here needs to be a real secret.

## Contact form setup

The form uses [EmailJS](https://www.emailjs.com) (free tier: 200 emails/month).

1. Create an EmailJS account, add an **Email Service** (Gmail, Outlook, etc.), and add an **Email Template**.
2. Your template body must reference these exact variable names — they're the form's input `name` attributes:
   ```
   Name: {{user_name}}
   Email: {{user_email}}
   Subject: {{subject}}
   Message: {{message}}
   ```
3. Copy the Service ID, Template ID, and Public Key (Account → General) into `.env`.

If these aren't set, the form stays visibly disabled ("Email not configured") instead of silently failing — check the browser console for a reminder too.

## Section toggles & reordering

Everything is driven by `portfolioConfig.sections` in `src/config/portfolio.config.ts`:

```ts
sections: [
  { id: 'about', label: 'About', icon: User, enabled: true, showInNav: true },
  // ...
]
```

- Delete a section from your page entirely: set `enabled: false`.
- Reorder the page: reorder this array.
- Keep a section reachable via scroll/⌘K but out of the top navbar (useful for less-central sections): `showInNav: false`.

## Theming

Change `theme.accent.light` / `theme.accent.dark` in the config (HSL triplet, e.g. `"142 71% 45%"` for green) — applied at runtime, no CSS edits needed. For deeper styling changes (fonts, border radius, spacing scale), see `tailwind.config.js` and `src/index.css`.

## Deployment

### GitHub Pages

```bash
# .env: VITE_BASE_PATH=/your-repo-name/, VITE_SITE_URL=https://<user>.github.io/<repo>
npm run deploy
```
Also update `homepage` in `package.json` to match. This runs `vite build`, regenerates `sitemap.xml`/`robots.txt`/`manifest.json` from `.env`, and publishes `dist/` via `gh-pages`.

### Vercel

```bash
npx vercel link
npx vercel --prod
```
Leave `VITE_BASE_PATH` unset (defaults to `/`) — Vercel serves from the domain root. Set the same `.env` variables in the Vercel project's Environment Variables settings (`.env` itself is never uploaded).

## Project Structure

```
├── public/                     # Static assets — profile/work photos, resume, project images
├── src/
│   ├── config/
│   │   └── portfolio.config.ts # ← the single content config file
│   ├── components/
│   │   ├── sections/           # One component per page section
│   │   ├── layout/              # Navbar, Footer, Section wrapper, Container
│   │   └── features/            # Command palette, scroll progress
│   ├── hooks/
│   ├── App.tsx                 # Renders sections dynamically from config
│   └── main.tsx
├── scripts/
│   ├── generate-sitemap.js     # Builds sitemap.xml + robots.txt from .env
│   └── generate-manifest.js    # Builds manifest.json from .env
├── .env.example                # Copy to .env and fill in
├── vite.config.ts              # Reads VITE_BASE_PATH
└── index.html                  # SEO/OG/JSON-LD, templated via Vite %VITE_*% env replacement
```

## License

MIT — see [LICENSE](LICENSE). Fork it, strip the content, make it yours; attribution appreciated but not required.
