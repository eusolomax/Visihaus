import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Base.vue'),
    redirect: { path: "/home" },
    name: 'Base',
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home.vue'),
        name: 'Home',
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/components/PageNotFound.vue'),
        name: 'pageNotFound',
      }
    ]
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router