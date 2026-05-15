import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.cadani-solar.de',
  output: 'static',
  trailingSlash: 'never',
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn1.site-media.eu' },
      { protocol: 'https', hostname: 'files.elfsightcdn.com' },
    ],
  },
});
