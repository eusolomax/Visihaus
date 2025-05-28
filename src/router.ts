import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Base.vue'),
    redirect: { name: 'Home' },
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
        name: 'Home'
      },
      {
        path: 'user/:username',
        component: () => import('@/views/UserProfile.vue'),
        name: 'UserProfile'
      },
      {
        path: ':pathMatch(.*)*',
        component: () => import('@/components/PageNotFound.vue'),
        name: 'PageNotFound'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
