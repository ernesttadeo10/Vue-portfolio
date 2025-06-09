import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import Profile from '../views/Profile.vue'
import Showcase from '../views/Showcase.vue'
import Contact from '../views/Contact.vue'
import Creative from '../views/Creative.vue'

const routes = [
  { path: '/login', component: Login },
  {
    path: '/portfolio',
    component: DashboardLayout,
    children: [
      { path: 'profile', component: Profile },
      { path: 'showcase', component: Showcase },
      { path: 'contact', component: Contact },
      { path: 'creative', component: Creative },
    ]
  },
  { path: '/', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
