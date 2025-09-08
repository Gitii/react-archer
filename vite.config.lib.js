import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/react-archer.ts'),
      name: 'ReactArcher',
      formats: ['es', 'umd'],
      fileName: (format) => `react-archer.${format === 'es' ? 'js' : format === 'umd' ? 'umd.js' : 'js'}`,
    },
    outDir: 'lib',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});