import { defineConfig } from 'astro/config';

// GitHub Actions supplies the real Pages URL during deployment.
export default defineConfig({
  site: process.env.SITE_URL || 'https://sslishy.github.io',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
