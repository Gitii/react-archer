import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'example',
  base: './',
  build: {
    outDir: '../example-dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      'react-archer': resolve(__dirname, 'src/react-archer.ts'),
    },
  },
});