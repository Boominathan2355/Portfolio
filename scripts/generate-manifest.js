import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  process.loadEnvFile(resolve(__dirname, '../.env'));
} catch {
  // .env is optional locally (e.g. CI providing real env vars directly)
}

const BASE_PATH = (process.env.VITE_BASE_PATH || '/').replace(/\/?$/, '/');
const NAME = process.env.VITE_SITE_TITLE || 'Portfolio';
const SHORT_NAME = (process.env.VITE_AUTHOR_NAME || 'Portfolio').split(' ')[0];
const DESCRIPTION = process.env.VITE_SITE_DESCRIPTION || '';
const THEME_COLOR = process.env.VITE_THEME_COLOR || '#3b82f6';

const p = (path) => `${BASE_PATH}${path}`.replace(/([^:])\/\//g, '$1/');

const manifest = {
  name: NAME,
  short_name: SHORT_NAME,
  description: DESCRIPTION,
  start_url: BASE_PATH,
  scope: BASE_PATH,
  id: BASE_PATH,
  display: 'standalone',
  display_override: ['standalone', 'minimal-ui', 'fullscreen'],
  orientation: 'any',
  background_color: '#ffffff',
  theme_color: THEME_COLOR,
  prefer_related_applications: false,
  categories: ['portfolio', 'development', 'productivity'],
  lang: 'en',
  dir: 'ltr',
  // Only logo.svg ships by default. Add PNG/maskable variants to public/
  // (e.g. logo-192x192.png, logo-512x512.png) and list them here for
  // richer install icons — see README "Progressive Web App" section.
  icons: [
    { src: p('logo.svg'), sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
  ],
  shortcuts: [
    { name: 'Projects', url: p('#projects'), description: 'View my projects' },
    { name: 'Contact', url: p('#contact'), description: 'Get in touch' },
  ],
  related_applications: [],
  iarc_rating_id: '',
  share_target: {
    action: p('share'),
    method: 'GET',
    enctype: 'application/x-www-form-urlencoded',
    params: { title: 'title', text: 'text', url: 'url' },
  },
};

const json = JSON.stringify(manifest, null, 2);

try {
  writeFileSync(resolve(__dirname, '../dist/manifest.json'), json);
  writeFileSync(resolve(__dirname, '../public/manifest.json'), json);
  console.log('✅ manifest.json generated successfully!');
} catch (error) {
  console.error('❌ Error generating manifest.json:', error);
  process.exit(1);
}
