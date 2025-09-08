import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  watchForFileChanges: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    async setupNodeEvents(on, config) {
      const { default: pluginConfig } = await import('./cypress/plugins/index.js');
      return pluginConfig(on, config);
    },
    baseUrl: 'http://localhost:8080',
  },
});
