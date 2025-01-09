import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:3000',
        target: `${process.env.VITE_APP_API_URL}`,
        changeOrigin: true,
        secure: false,      
        ws: true,
      },
    },
  },
  plugins: [react()],
})

