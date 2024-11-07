import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      'ArtGallery': '/src/Art-Gallery',
      'Dashboard': '/src/src-dashboard'
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/Art-Gallery/index.html'),
        admin: path.resolve(__dirname, 'src/src-dashboard/index.html')
      }
    }
  }
})
