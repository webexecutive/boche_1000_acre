import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from "path"
import fs from 'fs'

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-htaccess',
      closeBundle() {
        fs.copyFileSync(
          path.resolve(__dirname, 'public/.htaccess'),
          path.resolve(__dirname, 'dist/.htaccess')
        );
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})