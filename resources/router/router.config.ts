import { RouterConfig } from '@nuxt/schema'
import mainLayout from '@/presentation/layouts/contentLayout.vue'
import Home from '@/presentation/pages/index.vue'
import Details from '@/presentation/pages/details.vue'

const config: RouterConfig = {
  routes: () => [
    {
      path: '/',
      name: 'layout',
      component: mainLayout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/details/:name',
          name: 'details',
          component: Details,
        },
      ],
    },
  ],
}

export default config
