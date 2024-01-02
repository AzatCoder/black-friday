import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.join(__dirname, 'src/components'),
      '@storage': path.join(__dirname, 'src/storage'),
      '@assets': path.join(__dirname, 'src/assets'),
      '@hooks': path.join(__dirname, 'src/hooks'),
    }
  }
})
