import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `plugin.js`,
        chunkFileNames: `plugin.js`,
        assetFileNames: `plugin.css`
      }
    }
  }
})
