import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // '/' works for Vercel, Netlify, or a custom domain. Deploying to GitHub
    // Pages as a project site (username.github.io/repo-name) needs this set
    // to '/repo-name/' — set VITE_BASE_PATH in .env rather than editing here.
    base: env.VITE_BASE_PATH || '/',
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
  };
});
