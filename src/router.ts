import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Base.vue'),
    redirect: { name: 'home' },
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
        name: 'home'
      },
      {
        path: 'user/:username',
        component: () => import('@/views/UserProfile.vue'),
        name: 'userProfile'
      },
      {
        path: ':pathMatch(.*)*',
        component: () => import('@/components/PageNotFound.vue'),
        name: 'pageNotFound'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
