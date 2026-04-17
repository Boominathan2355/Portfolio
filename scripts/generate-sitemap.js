import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://boominathan2355.github.io/Portfolio';

// Routes configuration (Focus on main landing page for Single Page Application)
const routes = [
  { path: '', changefreq: 'weekly', priority: '1.0' }
];

// Function to format date to YYYY-MM-DD
const formatDate = (date) => date.toISOString().split('T')[0];

const today = new Date();
const lastMod = formatDate(today);

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${routes
    .map(({ path, changefreq, priority }) => `
    <url>
      <loc>${BASE_URL}${path ? `/${path}` : ''}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`)
    .join('')}
</urlset>`;

// Write sitemap to both dist and public directories
const distPath = resolve(__dirname, '../dist/sitemap.xml');
const publicPath = resolve(__dirname, '../public/sitemap.xml');

try {
  writeFileSync(distPath, sitemap);
  writeFileSync(publicPath, sitemap);
  console.log('✅ Sitemap generated successfully!');
  console.log(`🔗 Sitemap URL: ${BASE_URL}/sitemap.xml`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}