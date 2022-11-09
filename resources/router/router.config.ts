import { RouterConfig } from '@nuxt/schema'
import Test from '~/presentation/pages/index.vue'

const config: RouterConfig = {
  routes: (_routes) => [
    {
      path: '/',
      name: 'home',
      component: Test,
    },
  ],
}

export default config
