/* eslint-disable no-dupe-keys */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: '*',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', 
  },
  define: {
    'process.env': {
      REACT_APP_HOSTNAME: "192.168.185.161"
    }
  }
})
