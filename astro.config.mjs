import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://image-labo.com',
  build: {
    inlineStylesheets: 'never'
  }
});