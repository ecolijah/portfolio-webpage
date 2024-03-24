import { createMemoryHistory, createRouter } from 'vue-router'


import Landing from './components/Landing.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import Studio from './components/Studio.vue'
import Contact from './components/Contact.vue';

const routes = [
  { path: '/', component: Landing },
  { path: '/projects', component: Projects },
  { path: '/experience', component: Experience},
  { path: '/studio', component: Studio},
  { path: '/contact', component: Contact}

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior (to, from, savedPosition){
    return {top: 0,
    behavior: 'smooth'
    }
  }
})

export default router