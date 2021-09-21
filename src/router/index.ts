import Vue from 'vue'
import type { RouteConfig } from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes: RouteConfig[] = [
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
]

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
})
