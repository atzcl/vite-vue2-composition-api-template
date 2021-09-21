import { defineConfig, normalizePath } from 'vite'
import legacy from '@vitejs/plugin-legacy'

import { createVuePlugin } from 'vite-plugin-vue2'
import VitePluginCertificate from 'vite-plugin-mkcert'
import WindiCSS from 'vite-plugin-windicss'
import visualizer from 'rollup-plugin-visualizer'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'

import ViteComponents from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin({ jsx: true }),

    ScriptSetup(),

    VitePluginCertificate({
      source: 'coding',
    }),

    WindiCSS(),

    ViteComponents({
      dirs: ['src'],
      resolvers: [ElementUiResolver()],
    }),

    // 兼容 IE11
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),

    visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    https: true,
  },
  resolve: {
    alias: [
      // @ts-ignore
      { find: /^@\//, replacement: `${__dirname}/src/` },
      /**
       * support less ’~‘ alias
       *
       * @see https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
       */
      { find: /^~/, replacement: '' },
    ],
    dedupe: ['vue-demi'],
  },

  build: {
    target: 'es2015',
    minify: true,
    terserOptions: {
      compress: {
        keep_infinity: true,
        // Used to delete console in production environment
        drop_console: true,
      },
    },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
})
