
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    hmr: {
      // Исправляем проблему с WebSocket
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
      clientPort: 5173
    },
    // Настройка CORS для корректной работы в режиме preview
    cors: true,
    // Расширенные настройки для прокси-среды
    proxy: {
      // При необходимости здесь можно добавить прокси-конфигурацию
    }
  }
})
