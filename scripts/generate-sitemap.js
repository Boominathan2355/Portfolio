import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://Boominathan2355.github.io/Portfolio';

const routes = [
  '',
  '#about',
  '#skills',
  '#projects',
  '#education',
  '#experience',
  '#certifications',
  '#contact'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(route => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

writeFileSync(resolve(process.cwd(), 'dist', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');