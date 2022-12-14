import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// import pxToViewPort from 'postcss-px-to-viewport'

import unocss from 'unocss/vite'

import { visualizer } from 'rollup-plugin-visualizer'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : './',
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue'],
        dts: 'auto-imports.d.ts',
        resolvers: [ElementPlusResolver()],
        // eslint报错解决
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      viteMockServe({
        mockPath: './src/mock',
        supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
        watchFiles: false // 监视文件更改
      }),
      unocss({
        rules: [
          ['flex', { display: 'flex' }],
          ['pink', { color: 'pink' }],
          [/^fz-(\d+)$/, ([, d]) => ({ 'font-size': `${Number(d)}px` })]
        ],
        shortcuts: {
          combine: 'flex pink'
        }
      }),
      visualizer({
        open: true
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/style/mixin.scss" as *;`
        }
      }
      // postcss: {
      //   plugins: [
      //     pxToViewPort({
      //       unitToConvert: 'px', // 要转化的单位
      //       viewportWidth: 320 // UI设计稿的宽度
      //     })
      //   ]
      // }
    },
    server: {
      open: true
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          /* 生产环境移除console.log */
          drop_console: true,
          drop_debugger: true
        }
      },
      cssCodeSplit: true, //css 拆分
      sourcemap: false, //不生成sourcemap
      assetsInlineLimit: 5000 //小于该值 图片将打包成Base64
    }
  }
})
