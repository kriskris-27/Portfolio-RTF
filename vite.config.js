import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import path module
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Creates '@' alias for 'src' folder
    },
  },
});
