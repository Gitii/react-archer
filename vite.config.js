import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'example',
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      'react-archer': '/src/react-archer.ts',
    },
  },
});