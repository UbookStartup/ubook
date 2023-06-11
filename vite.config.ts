/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@/shared': `${path.resolve(__dirname, 'src/shared')}/`,
      '@/features': `${path.resolve(__dirname, 'src/features')}/`,
      '@/assets': `${path.resolve(__dirname, 'src/assets')}/`,
    },
  },
  plugins: [react()],
});
