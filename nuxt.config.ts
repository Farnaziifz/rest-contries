import { defineNuxtConfig } from 'nuxt/config'
import eslintPlugin from 'vite-plugin-eslint'


export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {


        scss: {
          additionalData: ((files: string[]) =>
              files.reduce((acc: string, cur: string) => acc + `@import "./assets/styles/${cur}.scss";\n`, '')
          )(
            /*
             * Inorder to add a new scss file to be imported as global in application
             * make sure you placed that file in ./assets/styles direction
             * and then just put the file name in array below.
             */
            ['_variables'],
          ),
        },
      },
    },
  },
})
