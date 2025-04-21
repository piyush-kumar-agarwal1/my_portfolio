import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-core': ['three'],
          'react-vendor': ['react', 'react-dom'],
          'drei-vendor': ['@react-three/drei'],
          'fiber-vendor': ['@react-three/fiber'],
        }
      }
    },
    sourcemap: false
  },
})