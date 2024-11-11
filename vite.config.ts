import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/react-vite-ts-tailwind-exp-1',
  plugins: [
    react(),
    ghPages(),
    svgr(),
  ],
});
