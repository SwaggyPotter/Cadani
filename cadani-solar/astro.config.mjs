import { defineConfig } from 'astro/config';
import compress from '@playform/compress';

export default defineConfig({
  site: 'https://www.cadani-solar.de',
  output: 'static',
  trailingSlash: 'never',
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn1.site-media.eu' },
      { protocol: 'https', hostname: 'files.elfsightcdn.com' },
    ],
    format: 'webp',
    quality: 80,
  },
  integrations: [
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
});
