import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Patrimonio from './views/Patrimonio.vue'
import Bancada from './views/Bancada.vue'
import HelpDesk from './views/HelpDesk.vue'
import Usuario from './views/Usuario.vue'
import Setting from './views/Setting.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/patrimonio',
      name: 'Patrimonio',
      component: Patrimonio
    },
    {
      path: '/bancada',
      name: 'Bancada',
      component: Bancada
    },
    {
      path: '/helpDesk',
      name: 'HelpDesk',
      component: HelpDesk
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: Usuario
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})

export default router
