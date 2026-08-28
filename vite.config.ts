import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Manual chunks for better caching + smaller initial bundle
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              if (id.includes('node_modules')) {
                if (id.includes('recharts')) return 'vendor-recharts';
                if (id.includes('react') || id.includes('scheduler') || id.includes('use-sync-external-store')) return 'vendor-react';
                if (id.includes('lucide')) return 'vendor-icons';
                return 'vendor';
              }
              // Shared page infrastructure (used by multiple pages) — its own chunk
              if (
                id.includes('/pages/SEO') ||
                id.includes('/pages/FAQ') ||
                id.includes('/pages/Skeletons') ||
                id.includes('/pages/effects') ||
                id.includes('/pages/hooks') ||
                id.includes('/pages/router') ||
                id.includes('/pages/i18n') ||
                id.includes('/pages/dataI18n') ||
                id.includes('/pages/translations') ||
                id.includes('/pages/data') ||
                id.includes('/pages/icons') ||
                id.includes('/pages/programDetails') ||
                id.includes('/pages/programDetailsHi')
              ) return 'page-common';
              if (id.includes('/pages/HomePage') || id.includes('/pages/sections/')) return 'page-home';
              if (id.includes('/pages/ProgramDetailPage')) return 'page-program';
              if (id.includes('/pages/InstitutionDetailPage')) return 'page-institution';
              if (id.includes('/pages/AboutPage') || id.includes('/pages/GalleryPage') || id.includes('/pages/MessagesPage') || id.includes('/pages/ContactPage')) return 'page-sub';
              if (id.includes('/pages/')) return 'page';
            },
          },
        },
        chunkSizeWarningLimit: 1500,
        cssCodeSplit: true,
        sourcemap: false,
      },
    };
});
