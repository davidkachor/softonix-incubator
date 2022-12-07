import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { ComponentsBuilder } from './vite.config.components'
import { ImportsBuilder } from './vite.config.imports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ComponentsBuilder(),
    ImportsBuilder()
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      colors: fileURLToPath(new URL('./tailwind/tailwind.colors.cjs', import.meta.url))
    }
  },

  optimizeDeps: {
    include: ['colors']
  }
})
