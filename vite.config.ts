/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { crx, defineManifest } from '@crxjs/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Ai-Writer',
  version: '1.0.0',
  permissions: [],
  action: {
    default_popup: 'index.html',
  },
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
  },
});
