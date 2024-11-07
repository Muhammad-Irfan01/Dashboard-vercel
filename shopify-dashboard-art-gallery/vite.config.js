import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      'ArtGallery': '/src/Art-Gallery',
      'Dashboard': '/src/src-dashboard'
    }
  },
})
