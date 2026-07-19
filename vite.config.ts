import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Set to your repository name for GitHub Pages
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react', 'cmdk'],
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Optional: exclude unnecessary deps from optimization
  },
});