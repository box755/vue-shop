import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

//導入element插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import ElementPlus from 'unplugin-element-plus/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    //配置elementplus
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      resolvers: [
        ElementPlusResolver({ importStyle: "sass"})],
    }),

    //設定主題配置
    // elementPlus預設使用自己的scss編譯後的css檔案樣式
    ElementPlus({
      // 讓elementPlus動態加載scss設定樣式，也就是@use scss路徑
      useSource: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        // 讓每個elementPlust當案自動加載scss樣式
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
          `,
      }
    }
  },
})
