import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    proxy: {
      // Setiap request yang diawali '/api-wakatime' akan diarahkan ke Wakatime
      '/api-wakatime': {
        target: 'https://api.wakatime.com',
        changeOrigin: true,
        secure: true,
        // Kita hilangkan prefix '/api-wakatime' saat dikirim ke server tujuan
        rewrite: (path) => path.replace(/^\/api-wakatime/, '/api/v1/users/current/stats/last_7_days'),
      },
    },
  },
})