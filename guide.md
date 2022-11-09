## Adding SASS

Inorder to add sass to the nuxt we should install sass and sass-loader:

```shell
yarn add -D sass
```

Inorder to import variables and files globally in application we should add styling resources to the application:

```ts
export default defineNuxtConfig({
  vite: {
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
```

## Adding eslint

```shell
yarn add -D -E eslint@8.22
```

```shell
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser vite-plugin-eslint
```