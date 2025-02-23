import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: 'generateSW',
      injectRegister: 'inline',
      workbox: {
        maximumFileSizeToCacheInBytes: 100000000,
      },
      registerType: 'autoUpdate',
      includeAssets: ['favicon-16x16.png', 'apple-touch-icon.png', 'safari-pinned-tab.svg'],
      manifest: {
          "name": "R2 Holistic Health",
          "short_name": "RHH",
          "description": 'My Awesome App description',
          "icons": [
              {
                  "src": "/android-chrome-192x192.png",
                  "sizes": "192x192",
                  "type": "image/png"
              },
              {
                  "src": "/android-chrome-384x384.png",
                  "sizes": "384x384",
                  "type": "image/png"
              }
          ],
          "theme_color": "#ffffff",
          "background_color": "#ffffff",
          "display": "standalone"
      },
    })
  ],
});
