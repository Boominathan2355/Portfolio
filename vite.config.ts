import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Set to your repository name for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Optional: exclude unnecessary deps from optimization
  },
});
// This configuration sets the base path for the application to '/Portfolio/'
// which is necessary for deploying to GitHub Pages under a repository name.
// The `optimizeDeps` section is optional and can be adjusted based on your dependencies.