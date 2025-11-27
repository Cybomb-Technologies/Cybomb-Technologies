import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/submit': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/submit/, '/macros/s/AKfycbxwqP-yu4OOYy0dbWovolUHLLqkO-nPwBdXYquGY2WfXSlCNf30avl1GUvg8IJciw/exec'),
      },
    },
  },
});

