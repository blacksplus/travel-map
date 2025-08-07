import { createRouter, createWebHistory } from 'vue-router'
// import IndexView from '../views/IndexView.vue'
import MapView from '@/views/map/map.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MapView',
      component: MapView
    }
  ]
})

export default router
