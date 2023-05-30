import { createRouter, createWebHistory } from 'vue-router'

import Login from './views/login.vue'
import Home from './views/home.vue'
import Patrimonio from './views/patrimonio.vue'
import Bancada from './views/bancada.vue'
import Manutencao from './views/manutencao.vue'
import HelpDesk from '.views/helpDeskAdm'
import HelpDeskUser from '.views/helpDeskUser'
import Usuario from './views/usuario.vue'
import Logout from './views/logout.vue'

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
      path: '/manutencao',
      name: 'Manutencao',
      component: Manutencao
    },
    {
      path: '/helpDesk',
      name: 'HelpDesk',
      component: HelpDesk
    },
    {
      path: '/helpDeskUser',
      name: 'HelpDeskUser',
      component: HelpDeskUser
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: Usuario
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})

export default router
