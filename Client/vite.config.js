import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [react(),
     VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    manifest: {
      name: 'Who Invent What',
      short_name: 'WiW',
      description: 'A simple web app to search for inventions directories!',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })],
})


