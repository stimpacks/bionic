import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { chromeExtension } from "vite-plugin-chrome-extension";

export default defineConfig({
  
  build: {
    rollupOptions: {
      input: "./manifest.json"
    },
    minify: true
  },
  // @ts-ignore
  plugins: [react(), chromeExtension()],
})
