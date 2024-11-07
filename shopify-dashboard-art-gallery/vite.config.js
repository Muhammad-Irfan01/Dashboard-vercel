import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
     alias: {
      '@': path.resolve(__dirname, 'src'),
      'ArtGallery': path.resolve(__dirname, 'src/Art-Gallery'),
      'Dashboard': path.resolve(__dirname, 'src/src-dashboard')
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
